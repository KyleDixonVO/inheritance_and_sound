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
let bomb;
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
    if ((0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 0, 0) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 60, 0) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 30, 0) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 10, 36) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 50, 36) ||
        (0, Toolkit_1.pointHit)(chopper.sprite, balloon.sprite, 78, 15)) {
        chopper.killMe();
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b5c87bb2b484c5799e90")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e9a15f176deacb705619.hot-update.js.map