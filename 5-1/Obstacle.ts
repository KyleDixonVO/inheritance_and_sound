import { AssetManager } from "./AssetManager";
import { Chopper } from "./Chopper";
import { boxHit } from "./Toolkit";

export class Obstacle {
    public static STATE_ACTIVE:number = 0;
    public static STATE_INACTIVE:number = 1;

    // the Obstacle's sprite object
    protected _sprite:createjs.Sprite;
    protected _state:number;
    protected stage:createjs.StageGL;
    protected chopper:Chopper;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, chopper:Chopper) {
        // initialization of properties
        this.stage = stage;
        this.chopper = chopper;
        this._state = Obstacle.STATE_ACTIVE;
    }

    // ------------------------------------------------ gets/sets
    get sprite() {
        return this._sprite;
    }

    get state() {
        return this._state;
    }

    // --------------------------------------------------- public methods
    public positionMe(x:number, y:number):void {
        // positioning the balloon sprite
        this._sprite.x = x;
        this._sprite.y = y;
    }

    public update():void {
        // collision detection with Bounding Box between chopper and obstacle's sprite
        if (boxHit(this.chopper.sprite, this._sprite)) {
            // collision detected!
            this.chopper.killMe();
        }  
    }
}