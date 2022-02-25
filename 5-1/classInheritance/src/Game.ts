// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST, CHOPPER_SPEED, BOMB_SPEED } from "./Constants";
import { boxHit, pointHit } from "./Toolkit";
import { AssetManager } from "./AssetManager";
import { Chopper } from "./Chopper";
import { Balloon } from "./Balloon";
import { Rocket } from "./Rocket";
import { Bomb } from "./Bomb";

// game variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;

// assetmanager object
let assetManager:AssetManager;

// game objects
let background:createjs.Sprite;
let ground:createjs.Sprite;
let balloon:Balloon;
let chopper:Chopper;
let bomb:Bomb;
let rocket:Rocket;

// key booleans
let leftKey:boolean = false;
let rightKey:boolean = false;

// current score
let score:number;

// --------------------------------------------------- private methods
function monitorKeys():void {
    if (leftKey) {
        chopper.direction = Chopper.LEFT;
        chopper.startMe();
    } else if (rightKey) {
        chopper.direction = Chopper.RIGHT;
        chopper.startMe();
    } else {
        chopper.stopMe();
    }
}

// --------------------------------------------------- event handlers
function onReady(e:createjs.Event):void {
    console.log(">> adding sprites to game");

    score = 0;
    
    // construct game object sprites
    background = assetManager.getSprite("sprites","other/background",0,0);
    stage.addChild(background);

    ground  = assetManager.getSprite("sprites","other/ground",0,462);
    stage.addChild(ground);

    chopper = new Chopper(stage, assetManager);
    chopper.positionMe(550,150);
    chopper.speed = CHOPPER_SPEED;

    balloon  = new Balloon(stage, assetManager, chopper);
    balloon.positionMe(200,200);
    balloon.startMe();

    rocket = new Rocket(stage, assetManager, chopper);
    rocket.positionMe(400, 393);
    rocket.startMe();

    // ---------------------------- challenge solution
    bomb = new Bomb(stage, assetManager, ground, chopper);
    bomb.speed = BOMB_SPEED;
    // -----------------------------------------------

    // setup event listeners for keyboard keys
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;     

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");
}

function onKeyDown(e:KeyboardEvent):void {
    // console.log("key has been pressed down: " + e.key);
    if (e.key == "ArrowLeft") leftKey = true;
    else if (e.key == "ArrowRight") rightKey = true;
    // ---------------------------- challenge solution
    if (e.key == " ") bomb.dropMe();
    // -----------------------------------------------
}

function onKeyUp(e:KeyboardEvent):void {
    if (e.key == "ArrowLeft") leftKey = false;
    else if (e.key == "ArrowRight") rightKey = false;
}

function onTick(e:createjs.Event):void {
    // TESTING FPS
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // This is your game loop :)
    monitorKeys();
    chopper.update();
    balloon.update();
    rocket.update();
    // ---------------------------- challenge solution
    bomb.update();
    // -----------------------------------------------

    // update the stage!
    stage.update();
}

// --------------------------------------------------- main method
function main():void {
    console.log(">> initializing");

    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);    
}

main();