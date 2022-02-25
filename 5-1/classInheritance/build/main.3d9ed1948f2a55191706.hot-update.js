"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Rocket.ts":
/*!***********************!*\
  !*** ./src/Rocket.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rocket = void 0;
const Obstacle_1 = __webpack_require__(/*! ./Obstacle */ "./src/Obstacle.ts");
const Chopper_1 = __webpack_require__(/*! ./Chopper */ "./src/Chopper.ts");
class Rocket extends Obstacle_1.Obstacle {
    constructor(stage, assetManager, chopper) {
        super(stage, assetManager, chopper);
        this.hasLaunched = false;
        this._sprite = assetManager.getSprite("sprites", "rocket/idle", 0, 0);
        stage.addChild(this._sprite);
    }
    startMe() {
        this.startY = this._sprite.y;
        this._sprite.gotoAndPlay("rocket/idle");
    }
    update() {
        super.update();
        if (this.chopper.state == Chopper_1.Chopper.STATE_DEAD || this.chopper.state == Chopper_1.Chopper.STATE_DYING) {
            return;
        }
        if ((Math.abs(this.chopper.sprite.x - this._sprite.x) <= 10) && (!createjs.Tween.hasActiveTweens(this._sprite))) {
            this._sprite.gotoAndPlay("rocket/launch");
            createjs.Sound.play("rocket-launch");
            createjs.Tween
                .get(this._sprite, { useTicks: true })
                .to({ y: -110 }, 50)
                .call(() => {
                this._sprite.y = this.startY;
                this._sprite.gotoAndPlay("rocket/idle");
            });
        }
    }
}
exports.Rocket = Rocket;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a74b8ebb5ae24c9463b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3d9ed1948f2a55191706.hot-update.js.map