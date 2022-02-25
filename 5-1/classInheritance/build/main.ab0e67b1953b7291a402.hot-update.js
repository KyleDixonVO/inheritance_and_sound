"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

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
        marker.name = "markie";
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
/******/ 	__webpack_require__.h = () => ("ff26693403c3a57a5e65")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ab0e67b1953b7291a402.hot-update.js.map