"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Chopper_1 = __webpack_require__(/*! ./Chopper */ "./src/Chopper.ts");
const Balloon_1 = __webpack_require__(/*! ./Balloon */ "./src/Balloon.ts");
let stage;
let canvas;
let assetManager;
let background;
let ground;
let balloon;
let chopper;
let leftKey = false;
let rightKey = false;
function monitorKeys() {
    if (leftKey) {
        chopper.direction = Chopper_1.default.LEFT;
        chopper.startMe();
    }
    else if (rightKey) {
        chopper.direction = Chopper_1.default.RIGHT;
        chopper.startMe();
    }
    else {
        chopper.stopMe();
    }
}
function monitorCollisions() {
    if ((0, Toolkit_1.boxHit)(chopper.sprite, balloon.sprite)) {
        console.log("collision!");
    }
}
function onReady(e) {
    console.log(">> adding sprites to game");
    background = assetManager.getSprite("assets", "other/background", 0, 0);
    stage.addChild(background);
    ground = assetManager.getSprite("assets", "other/ground", 0, 462);
    stage.addChild(ground);
    balloon = new Balloon_1.default(stage, assetManager);
    balloon.positionMe(200, 200);
    balloon.startMe();
    chopper = new Chopper_1.default(stage, assetManager);
    chopper.positionMe(550, 150);
    chopper.speed = Constants_1.CHOPPER_SPEED;
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onKeyDown(e) {
    if (e.key == "ArrowLeft")
        leftKey = true;
    else if (e.key == "ArrowRight")
        rightKey = true;
}
function onKeyUp(e) {
    if (e.key == "ArrowLeft")
        leftKey = false;
    else if (e.key == "ArrowRight")
        rightKey = false;
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    monitorKeys();
    chopper.update();
    monitorCollisions();
    stage.update();
}
function main() {
    console.log(">> initializing");
    canvas = document.getElementById("game-canvas");
    canvas.width = Constants_1.STAGE_WIDTH;
    canvas.height = Constants_1.STAGE_HEIGHT;
    stage = new createjs.StageGL(canvas, { antialias: true });
    assetManager = new AssetManager_1.default(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
}
main();


/***/ }),

/***/ "./src/Toolkit.ts":
/*!************************!*\
  !*** ./src/Toolkit.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointHit = exports.boxHit = exports.randomMe = void 0;
function randomMe(low, high) {
    let randomNum = 0;
    randomNum = Math.floor(Math.random() * (high - low + 1)) + low;
    return randomNum;
}
exports.randomMe = randomMe;
function boxHit(sprite1, sprite2) {
    let width1 = sprite1.getBounds().width;
    let height1 = sprite1.getBounds().height;
    let width2 = sprite2.getBounds().width;
    let height2 = sprite2.getBounds().height;
    if ((sprite1.x + width1 > sprite2.x) &&
        (sprite1.y + height1 > sprite2.y) &&
        (sprite1.x < sprite2.x + width2) &&
        (sprite1.y < sprite2.y + height2)) {
        return true;
    }
    else {
        return false;
    }
}
exports.boxHit = boxHit;
function pointHit(sprite1, sprite2, sprite1HitX = 0, sprite1HitY = 0, stage = null) {
    if (stage != null) {
        let markerPoint = sprite1.localToGlobal(sprite1HitX, sprite1HitY);
        let marker = new createjs.Shape();
        marker.graphics.beginFill("#FF00EC");
        marker.graphics.drawRect(0, 0, 4, 4);
        marker.regX = 2;
        marker.regY = 2;
        marker.x = markerPoint.x;
        marker.y = markerPoint.y;
        marker.cache(0, 0, 4, 4);
        stage.addChild(marker);
    }
    let point = sprite1.localToLocal(sprite1HitX, sprite1HitY, sprite2);
    if (sprite2.hitTest(point.x, point.y)) {
        return true;
    }
    else {
        return false;
    }
}
exports.pointHit = pointHit;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f19e7c45d6539eb9404f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e050bc69696fa2aaf70d.hot-update.js.map