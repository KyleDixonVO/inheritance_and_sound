import { AssetManager } from "./AssetManager";
import { Chopper } from "./Chopper";
import { Obstacle } from "./Obstacle";

export class Balloon extends Obstacle {
    // the Balloon's sprite object
    constructor(stage:createjs.StageGL, assetManager:AssetManager, chopper:Chopper) {
        // initialization of properties
        super(stage, assetManager, chopper)
        this.stage = stage;
        this.chopper = chopper;
        this._sprite = assetManager.getSprite("sprites", "other/balloon", 0, 0);
        stage.addChild(this._sprite);
    }

    // --------------------------------------------------- public methods
    public startMe():void {
        // TweenJS to make balloon float up and down
        createjs.Tween.get(this._sprite, {bounce:true, loop:-1, useTicks:true}).to({y:50}, 200, createjs.Ease.backInOut);
    }
}