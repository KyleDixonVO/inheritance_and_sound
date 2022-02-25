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
        this._sprite = assetManager.getSprite("sprites", "rocket/idle", 0, 0);
        stage.addChild(this._sprite);
    }
    startMe() {
        this._sprite.gotoAndPlay("rocket/idle");
    }
    launchMe() {
        if (this._sprite.x > this.chopper.sprite.x + 10 || this._sprite.x < this.chopper.sprite.x - 10) {
            this._sprite.y += 10;
        }
    }
}
exports.Rocket = Rocket;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("62295fd7cab696d0ca79")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.34e80c47aa657a8c109d.hot-update.js.map