"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Chopper.ts":
/*!************************!*\
  !*** ./src/Chopper.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chopper = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Chopper {
    constructor(stage, assetManager, bomb) {
        this._speed = 4;
        this._direction = Chopper.LEFT;
        this.stage = stage;
        this._state = Chopper.STATE_IDLE;
        this.bomb = bomb;
        this._sprite = assetManager.getSprite("sprites", "chopper/alive", 0, 0);
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
        if (this._state == Chopper.STATE_IDLE) {
            this._state = Chopper.STATE_MOVING;
        }
    }
    stopMe() {
        if (this._state == Chopper.STATE_MOVING) {
            this._state = Chopper.STATE_IDLE;
        }
    }
    bombMe() {
        this.bomb.dropMe(this._sprite.x, this._sprite.y);
    }
    positionMe(x, y) {
        this._sprite.x = x;
        this._sprite.y = y;
    }
    killMe() {
        if ((this._state == Chopper.STATE_DYING) || (this._state == Chopper.STATE_DEAD))
            return;
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
exports.Chopper = Chopper;
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
/******/ 	__webpack_require__.h = () => ("450ae2afe448e12db536")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0cd0f89259b16c98bf04.hot-update.js.map