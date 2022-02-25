"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bomb.ts":
/*!*********************!*\
  !*** ./src/Bomb.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bomb = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Bomb {
    constructor(stage, assetManager, ground) {
        this.stage = stage;
        this.ground = ground;
        this._state = Bomb.STATE_ARMED;
        this._speed = 4;
        this.sprite = assetManager.getSprite("assets", "bomb/alive", 0, 0);
    }
    set speed(value) {
        this._speed = value;
    }
    get state() {
        return this._state;
    }
    dropMe(x, y) {
        if (this._state == Bomb.STATE_ARMED) {
            this.sprite.x = x;
            this.sprite.y = y;
            this.sprite.play();
            this.stage.addChild(this.sprite);
            this._state = Bomb.STATE_DROPPING;
        }
    }
    killMe() {
        this._state = Bomb.STATE_EXPLODING;
        this.sprite.on("animationend", () => {
            this._state = Bomb.STATE_DEAD;
            this.sprite.stop();
            this.stage.removeChild(this.sprite);
        });
        this.sprite.gotoAndPlay("bomb/dead");
    }
    update() {
        if (this._state == Bomb.STATE_DROPPING) {
            this.sprite.y += this._speed;
            if ((0, Toolkit_1.boxHit)(this.sprite, this.ground)) {
                this.killMe();
            }
        }
    }
}
exports.Bomb = Bomb;
Bomb.STATE_ARMED = 0;
Bomb.STATE_DROPPING = 2;
Bomb.STATE_EXPLODING = 3;
Bomb.STATE_DEAD = 4;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Chopper_1 = __webpack_require__(/*! ./Chopper */ "./src/Chopper.ts");
const Balloon_1 = __webpack_require__(/*! ./Balloon */ "./src/Balloon.ts");
const Bomb_1 = __webpack_require__(/*! ./Bomb */ "./src/Bomb.ts");
let stage;
let canvas;
let assetManager;
let background;
let ground;
let balloon;
let chopper;
let bomb;
let leftKey = false;
let rightKey = false;
function monitorKeys() {
    if (leftKey) {
        chopper.direction = Chopper_1.Chopper.LEFT;
        chopper.startMe();
    }
    else if (rightKey) {
        chopper.direction = Chopper_1.Chopper.RIGHT;
        chopper.startMe();
    }
    else {
        chopper.stopMe();
    }
}
function monitorCollisions() {
    if ((0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 0, 0) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 60, 0) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 30, 0) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 10, 36) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 50, 36) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 78, 15)) {
        chopper.killMe();
    }
}
function onReady(e) {
    console.log(">> adding sprites to game");
    background = assetManager.getSprite("assets", "other/background", 0, 0);
    stage.addChild(background);
    ground = assetManager.getSprite("assets", "other/ground", 0, 462);
    stage.addChild(ground);
    balloon = new Balloon_1.Balloon(stage, assetManager);
    balloon.positionMe(200, 200);
    balloon.startMe();
    bomb = new Bomb_1.Bomb(stage, assetManager, ground);
    bomb.speed = Constants_1.BOMB_SPEED;
    chopper = new Chopper_1.Chopper(stage, assetManager, bomb);
    chopper.positionMe(550, 150);
    chopper.speed = Constants_1.CHOPPER_SPEED;
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onKeyDown(e) {
    if (e.key == "ArrowLeft")
        leftKey = true;
    else if (e.key == "ArrowRight")
        rightKey = true;
    if (e.key == " ")
        chopper.bombMe();
}
function onKeyUp(e) {
    if (e.key == "ArrowLeft")
        leftKey = false;
    else if (e.key == "ArrowRight")
        rightKey = false;
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    monitorKeys();
    chopper.update();
    monitorCollisions();
    bomb.update();
    stage.update();
}
function main() {
    console.log(">> initializing");
    canvas = document.getElementById("game-canvas");
    canvas.width = Constants_1.STAGE_WIDTH;
    canvas.height = Constants_1.STAGE_HEIGHT;
    stage = new createjs.StageGL(canvas, { antialias: true });
    assetManager = new AssetManager_1.AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
}
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a39e42b967d458053ed3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.62d2891bbe7ab92edb83.hot-update.js.map