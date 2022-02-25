"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Balloon.ts":
/*!************************!*\
  !*** ./src/Balloon.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Balloon = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
const Obstacle_1 = __webpack_require__(/*! ./Obstacle */ "./src/Obstacle.ts");
class Balloon extends Obstacle_1.Obstacle {
    constructor(stage, assetManager, chopper) {
        super(stage, assetManager, chopper);
        this.stage = stage;
        this.chopper = chopper;
        this._sprite = assetManager.getSprite("sprites", "other/balloon", 0, 0);
        stage.addChild(this._sprite);
    }
    get sprite() {
        return this._sprite;
    }
    startMe() {
        createjs.Tween.get(this._sprite, { bounce: true, loop: -1, useTicks: true }).to({ y: 50 }, 200, createjs.Ease.backInOut);
    }
    positionMe(x, y) {
        this._sprite.x = x;
        this._sprite.y = y;
    }
    update() {
        if ((0, Toolkit_1.boxHit)(this.chopper.sprite, this._sprite)) {
            this.chopper.killMe();
        }
    }
}
exports.Balloon = Balloon;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd4e1c6e0add2a445664")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.673f2cdac7d741b632cd.hot-update.js.map