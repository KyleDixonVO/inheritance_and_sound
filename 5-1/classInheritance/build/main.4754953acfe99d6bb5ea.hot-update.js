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
class Rocket extends Obstacle_1.Obstacle {
    constructor(stage, assetManager, chopper) {
        super(stage, assetManager, chopper);
        this.hasLaunched = false;
        this._sprite = assetManager.getSprite("sprites", "rocket/idle", 0, 0);
        stage.addChild(this._sprite);
    }
    startMe() {
        this._sprite.gotoAndPlay("rocket/idle");
    }
    update() {
        super.update();
        if (Math.abs(this.chopper.sprite.x - this._sprite.x) <= 10) {
            if (this.hasLaunched == false) {
                this._sprite.gotoAndPlay("rocket/launch");
            }
            this._sprite.y -= 10;
        }
    }
}
exports.Rocket = Rocket;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a8ac1e0aff68f277c7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4754953acfe99d6bb5ea.hot-update.js.map