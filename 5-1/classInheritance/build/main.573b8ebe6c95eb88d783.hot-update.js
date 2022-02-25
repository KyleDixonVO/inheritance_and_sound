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
        ;
        if ((Math.abs(this.chopper.sprite.x - this._sprite.x) <= 10) && (!createjs.Tween.hasActiveTweens(this._sprite))) {
            this._sprite.gotoAndPlay("rocket/launch");
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
/******/ 	__webpack_require__.h = () => ("4269d85948e4f069f5a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.573b8ebe6c95eb88d783.hot-update.js.map