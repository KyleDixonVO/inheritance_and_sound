"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/AssetManager.ts":
/*!*****************************!*\
  !*** ./src/AssetManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetManager = void 0;
class AssetManager {
    constructor(stage) {
        this.stage = stage;
        this.spriteSheets = [];
        this.spriteSheetsJSON = [];
        this.preloader = new createjs.LoadQueue();
        this.eventAllLoaded = new createjs.Event("allAssetsLoaded", true, false);
    }
    onLoaded(e) {
        console.log("asset loaded: " + e.item.src + " | asset type: " + e.item.type);
        switch (e.item.type) {
            case "json":
                let spriteSheetID = e.item.id;
                this.spriteSheetsJSON[spriteSheetID] = e.result;
                break;
            case "image":
                let id = e.item.id;
                let image = e.result;
                let data = this.spriteSheetsJSON[id];
                data.images = [image];
                let spriteSheet = new createjs.SpriteSheet(data);
                this.spriteSheets[id] = spriteSheet;
                break;
        }
    }
    onError(e) {
        console.log("ASSETMANAGER ERROR > Error Loading asset");
    }
    onComplete(e) {
        console.log(">> All assets loaded");
        this.spriteSheetsJSON = null;
        this.preloader.removeAllEventListeners();
        this.stage.dispatchEvent(this.eventAllLoaded);
    }
    getSprite(...args) {
        let [spriteSheetID, animationID, x, y] = args;
        let sprite = new createjs.Sprite(this.spriteSheets[spriteSheetID]);
        sprite.name = spriteSheetID;
        sprite.gotoAndStop(animationID);
        if (x == undefined) {
            x = 0;
            y = 0;
        }
        sprite.x = x;
        sprite.y = y;
        return sprite;
    }
    getSpriteSheet(spriteSheetID) {
        return this.spriteSheets[spriteSheetID];
    }
    loadAssets(manifest) {
        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
        createjs.Sound.alternateExtensions = ["mp3", "wav"];
        this.preloader.installPlugin(createjs.Sound);
        this.preloader.on("fileload", this.onLoaded, this);
        this.preloader.on("error", this.onError, this);
        this.preloader.on("complete", this.onComplete, this);
        this.preloader.setMaxConnections(1);
        this.preloader.loadManifest(manifest);
    }
}
exports.AssetManager = AssetManager;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("20a7897c392cbfe9623d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.507bea49be0430004ec7.hot-update.js.map