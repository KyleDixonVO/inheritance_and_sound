"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Balloon.ts":
/*!************************!*\
  !*** ./src/Balloon.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Balloon = void 0;
const Obstacle_1 = __webpack_require__(/*! ./Obstacle */ "./src/Obstacle.ts");
class Balloon extends Obstacle_1.Obstacle {
    constructor(stage, assetManager, chopper) {
        super(stage, assetManager, chopper);
        this.stage = stage;
        this.chopper = chopper;
        this._sprite = assetManager.getSprite("sprites", "other/balloon", 0, 0);
        stage.addChild(this._sprite);
    }
    startMe() {
        createjs.Tween.get(this._sprite, { bounce: true, loop: -1, useTicks: true }).to({ y: 50 }, 200, createjs.Ease.backInOut);
    }
}
exports.Balloon = Balloon;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45919834bb96446b5494")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.cd4e1c6e0add2a445664.hot-update.js.map