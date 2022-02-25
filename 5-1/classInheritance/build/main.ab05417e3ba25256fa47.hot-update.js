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
        this.isExploding = false;
        this._sprite = assetManager.getSprite("sprites", "rocket/idle", 0, 0);
        stage.addChild(this._sprite);
    }
    startMe() {
        this._sprite.gotoAndPlay("rocket/idle");
    }
    update() {
        super.update();
        if (Math.abs(this.chopper.sprite.x - this._sprite.x) <= 10) {
            this._sprite.gotoAndPlay("rocket/launch");
            createjs.Tween.get(this._sprite, { useTicks: true }).to({ y: -110 }, 50);
            if (this.chopper.state == Chopper_1.Chopper.STATE_DYING && this.isExploding == false) {
                this._sprite.gotoAndPlay("bomb.Dead");
                this.isExploding = true;
            }
        }
    }
}
exports.Rocket = Rocket;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("298dbcad028d567fed38")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ab05417e3ba25256fa47.hot-update.js.map