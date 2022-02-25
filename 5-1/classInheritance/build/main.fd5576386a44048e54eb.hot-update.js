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
class Balloon {
    constructor(stage, assetManager, chopper) {
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
            this.killMe();
        }
    }
    killMe() {
        if (this.exploded == false) {
            this._sprite.gotoAndPlay("bomb/dead");
        }
    }
}
exports.Balloon = Balloon;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e52a0647c4f119ce197d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fd5576386a44048e54eb.hot-update.js.map