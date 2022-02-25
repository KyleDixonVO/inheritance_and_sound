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


/***/ }),

/***/ "./src/Obstacle.ts":
/*!*************************!*\
  !*** ./src/Obstacle.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Obstacle = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Obstacle {
    constructor(stage, assetManager, chopper) {
        this.stage = stage;
        this.chopper = chopper;
        this._state = Obstacle.STATE_ACTIVE;
    }
    get sprite() {
        return this._sprite;
    }
    get state() {
        return this._state;
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
exports.Obstacle = Obstacle;
Obstacle.STATE_ACTIVE = 0;
Obstacle.STATE_INACTIVE = 1;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("623e5349e0a665a6a7f5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.889d7611d456f83f06ab.hot-update.js.map