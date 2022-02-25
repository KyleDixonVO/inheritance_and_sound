import { AssetManager } from "./AssetManager";
import { boxHit } from "./Toolkit";
import { Chopper } from "./Chopper";

export class Bomb {
    // class constants for readability 
    public static STATE_ARMED:number = 0;
    public static STATE_DROPPING:number = 2;
    public static STATE_EXPLODING:number = 3;
    public static STATE_DEAD:number = 4;

    private _state:number;
    private _speed:number;

    // the Bomb's sprite object
    private sprite:createjs.Sprite;
    private stage:createjs.StageGL;
    private ground:createjs.Sprite;
    private chopper:Chopper;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, ground:createjs.Sprite, chopper:Chopper) {
        // initialization of properties
        this.stage = stage;
        this.ground = ground;
        this.chopper = chopper;
        this._state = Bomb.STATE_ARMED;
        this._speed = 10;
        // constructing sprite of bomb but don't make visible yet
        this.sprite = assetManager.getSprite("sprites", "bomb/alive", 0, 0);
    }

    // --------------------------------------------------- gets/sets
    set speed(value:number) {
        this._speed = value;
    }

    get state():number {
        return this._state;
    }

    // --------------------------------------------------- public methods
    public dropMe():void {
        if (this._state == Bomb.STATE_ARMED) {
            // position bomb underneath the chopper
            this.sprite.x = this.chopper.sprite.x + 25;
            this.sprite.y = this.chopper.sprite.y + 36;
            this.sprite.play();
            this.stage.addChild(this.sprite);
            createjs.Sound.play("bomb-dropped");
            this._state = Bomb.STATE_DROPPING;
        }
    }

    public killMe():void {
        this._state = Bomb.STATE_EXPLODING;
        this.sprite.on("animationend", () => {
            this._state = Bomb.STATE_DEAD;
            this.sprite.stop();
            this.stage.removeChild(this.sprite);
        });
        this.sprite.gotoAndPlay("bomb/dead");
        createjs.Sound.play("bomb-explosion");
    }

    public update():void {
        if (this._state == Bomb.STATE_DROPPING) {
            // move the bomb down the stage
            this.sprite.y += this._speed;
            // collision detection for ground
            if (boxHit(this.sprite, this.ground)) {
                this.killMe();
            }
        }
    }

}