import { AssetManager } from "./AssetManager";
import { Obstacle } from "./Obstacle";
import { Chopper } from "./Chopper";

export class Rocket extends Obstacle {

    constructor(stage:createjs.StageGL, assetManager:AssetManager, chopper:Chopper) {
        // do the super class constructor
        super(stage, assetManager, chopper);

        // construct sprite for Rocket
        this._sprite = assetManager.getSprite("sprites", "rocket/idle", 0, 0);
        stage.addChild(this._sprite);
    }

    // --------------------------------------------------- public methods
    public startMe():void {
        this._sprite.gotoAndPlay("rocket/idle");
    }

}