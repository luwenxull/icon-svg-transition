"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_path_1 = require("d3-path");
function play() {
    const pathSerializer = d3_path_1.path();
    const w = 24;
    const h = 24;
    const p = 3; // padding
    pathSerializer.moveTo(p * 2, h / 2);
    pathSerializer.lineTo(w / 2, p);
    pathSerializer.moveTo(w / 2, p);
    pathSerializer.lineTo(w - p * 2, h / 2);
    pathSerializer.moveTo(p * 2, h - p);
    pathSerializer.lineTo(w / 2, h / 2);
    pathSerializer.moveTo(w / 2, h / 2);
    pathSerializer.lineTo(w - p * 2, h - p);
    return pathSerializer.toString();
}
exports.default = play;
