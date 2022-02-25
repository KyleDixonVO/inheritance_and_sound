import { AssetManager } from "./AssetManager";
import { Obstacle } from "./Obstacle";
import { Chopper } from "./Chopper";

export class Rocket extends Obstacle {

    private hasLaunched:Boolean = false;
    private startY:number;
    constructor(stage:createjs.StageGL, assetManager:AssetManager, chopper:Chopper) {
        // do the super class constructor
        super(stage, assetManager, chopper);

        // construct sprite for Rocket
        this._sprite = assetManager.getSprite("sprites", "rocket/idle", 0, 0);
        stage.addChild(this._sprite);
    }

    // --------------------------------------------------- public methods
    public startMe():void {
        this.startY = this._sprite.y;
        this._sprite.gotoAndPlay("rocket/idle");
    }

    public override update(): void {
        super.update();
        if (this.chopper.state == Chopper.STATE_DEAD || this.chopper.state == Chopper.STATE_DYING) {return}
        if ((Math.abs(this.chopper.sprite.x - this._sprite.x) <= 10) && (!createjs.Tween.hasActiveTweens(this._sprite))) {
             
            this._sprite.gotoAndPlay("rocket/launch");

            createjs.Sound.play("rocket-launch");
            createjs.Tween
            .get(this._sprite,{useTicks : true})
            .to({y:-110}, 50)
            .call(() => {
                this._sprite.y = this.startY;
                this._sprite.gotoAndPlay("rocket/idle");
            })
        }
    }
}