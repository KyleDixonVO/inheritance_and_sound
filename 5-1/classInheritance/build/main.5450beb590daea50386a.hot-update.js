"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Chopper.ts":
/*!************************!*\
  !*** ./src/Chopper.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Chopper {
    constructor(stage, assetManager) {
        this._speed = 4;
        this._direction = Chopper.LEFT;
        this.stage = stage;
        this._state = Chopper.STATE_IDLE;
        this._sprite = assetManager.getSprite("assets", "chopper/alive", 0, 0);
        this._sprite.play();
        this.width = this._sprite.getBounds().width;
        stage.addChild(this._sprite);
    }
    get sprite() {
        return this._sprite;
    }
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }
    set direction(value) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }
    get state() {
        return this._state;
    }
    startMe() {
        this._state = Chopper.STATE_MOVING;
    }
    stopMe() {
        this._state = Chopper.STATE_IDLE;
    }
    positionMe(x, y) {
        this._sprite.x = x;
        this._sprite.y = y;
    }
    killMe() {
        this._state = Chopper.STATE_DYING;
        this.stopMe();
        this._sprite.on("animationend", () => {
            this._state = Chopper.STATE_DEAD;
            this._sprite.stop();
            this.stage.removeChild(this._sprite);
        });
        this._sprite.gotoAndPlay("chopper/dead");
    }
    update() {
        if (this._state == Chopper.STATE_MOVING) {
            let sprite = this._sprite;
            if (this._direction == Chopper.LEFT) {
                sprite.x = sprite.x - this._speed;
                if (sprite.x < 0) {
                    sprite.x = 0;
                }
            }
            else if (this._direction == Chopper.RIGHT) {
                sprite.x = sprite.x + this._speed;
                if (sprite.x > (Constants_1.STAGE_WIDTH - this.width)) {
                    sprite.x = (Constants_1.STAGE_WIDTH - this.width);
                }
            }
        }
    }
}
exports["default"] = Chopper;
Chopper.LEFT = 3;
Chopper.RIGHT = 4;
Chopper.STATE_IDLE = 0;
Chopper.STATE_MOVING = 1;
Chopper.STATE_DYING = 2;
Chopper.STATE_DEAD = 3;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7adc5d1337dbb7f2b461")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5450beb590daea50386a.hot-update.js.map