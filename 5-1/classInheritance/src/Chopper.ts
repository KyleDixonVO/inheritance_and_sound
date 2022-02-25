import { AssetManager } from "./AssetManager";
import { STAGE_WIDTH } from "./Constants";

export class Chopper {
    // class constants for readability 
    public static LEFT:number = 3;
    public static RIGHT:number = 4;
    public static STATE_IDLE:number = 0;
    public static STATE_MOVING:number = 1;
    public static STATE_DYING:number = 2;
    public static STATE_DEAD:number = 3;    

    // private property variables
    private _speed:number;
    private _direction:number;
    private _state:number;
    // the Chopper's sprites object
    private _sprite:createjs.Sprite;

    // other globals
    private stage:createjs.StageGL;
    private width:number;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        // initialization of properties
        this._speed = 4;
        this._direction = Chopper.LEFT;
        this.stage = stage;
        this._state = Chopper.STATE_IDLE;

        this._sprite = assetManager.getSprite("sprites", "chopper/alive", 0, 0);
        this._sprite.play();
        // getting the width of the sprite here once since it flucuates during animation
        this.width = this._sprite.getBounds().width;
        
        stage.addChild(this._sprite);
    }

    // ------------------------------------------------ gets/sets
    get sprite() {
        return this._sprite;
    }

    set speed(value:number) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }

    set direction(value:number) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }

    get state() {
        return this._state;
    }    

    // --------------------------------------------------- public methods
    public startMe():void {
        if (this._state == Chopper.STATE_IDLE) {
            this._state = Chopper.STATE_MOVING;
        }
    }
    
    public stopMe():void {
        if (this._state == Chopper.STATE_MOVING) {
            this._state = Chopper.STATE_IDLE;
        }
    }   

    public positionMe(x:number, y:number):void {
        this._sprite.x = x;
        this._sprite.y = y;
    }

    public killMe():void {
        if ((this._state == Chopper.STATE_DYING) || (this._state == Chopper.STATE_DEAD)) return;

        this._state = Chopper.STATE_DYING;
        this.stopMe();
        this._sprite.on("animationend", () => {
            this._state = Chopper.STATE_DEAD;
            this._sprite.stop();
            this.stage.removeChild(this._sprite);
        });
        this._sprite.gotoAndPlay("chopper/dead");
        
        createjs.Sound.play("chopper-explosion");
    }

    public update():void {
        if (this._state == Chopper.STATE_MOVING) {
            // reference sprite object for cleaner code below
            let sprite:createjs.Sprite = this._sprite;

            if (this._direction == Chopper.LEFT) {
                // moving left
                sprite.x = sprite.x - this._speed;
                if (sprite.x < 0) {
                    sprite.x = 0;
                }
            } else if (this._direction == Chopper.RIGHT) {
                // moving right
                sprite.x = sprite.x + this._speed;
                if (sprite.x > (STAGE_WIDTH - this.width)) {
                    sprite.x = (STAGE_WIDTH - this.width);
                }
            }
        }
    }
}