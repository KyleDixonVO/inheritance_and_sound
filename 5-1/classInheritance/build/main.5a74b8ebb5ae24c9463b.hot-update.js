"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bomb.ts":
/*!*********************!*\
  !*** ./src/Bomb.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bomb = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Bomb {
    constructor(stage, assetManager, ground, chopper) {
        this.stage = stage;
        this.ground = ground;
        this.chopper = chopper;
        this._state = Bomb.STATE_ARMED;
        this._speed = 10;
        this.sprite = assetManager.getSprite("sprites", "bomb/alive", 0, 0);
    }
    set speed(value) {
        this._speed = value;
    }
    get state() {
        return this._state;
    }
    dropMe() {
        if (this._state == Bomb.STATE_ARMED) {
            this.sprite.x = this.chopper.sprite.x + 25;
            this.sprite.y = this.chopper.sprite.y + 36;
            this.sprite.play();
            this.stage.addChild(this.sprite);
            createjs.Sound.play("bomb-dropped");
            this._state = Bomb.STATE_DROPPING;
        }
    }
    killMe() {
        this._state = Bomb.STATE_EXPLODING;
        this.sprite.on("animationend", () => {
            this._state = Bomb.STATE_DEAD;
            this.sprite.stop();
            this.stage.removeChild(this.sprite);
        });
        this.sprite.gotoAndPlay("bomb/dead");
        createjs.Sound.play("bomb-explosion");
    }
    update() {
        if (this._state == Bomb.STATE_DROPPING) {
            this.sprite.y += this._speed;
            if ((0, Toolkit_1.boxHit)(this.sprite, this.ground)) {
                this.killMe();
            }
        }
    }
}
exports.Bomb = Bomb;
Bomb.STATE_ARMED = 0;
Bomb.STATE_DROPPING = 2;
Bomb.STATE_EXPLODING = 3;
Bomb.STATE_DEAD = 4;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fd76b6f80fb97471f428")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5a74b8ebb5ae24c9463b.hot-update.js.map