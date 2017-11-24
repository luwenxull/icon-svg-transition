"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_path_1 = require("d3-path");
function pause() {
    const pathSerializer = d3_path_1.path();
    const w = 24;
    const h = 24;
    const p = 3; // padding
    pathSerializer.moveTo(p, h - p);
    pathSerializer.lineTo(w / 2, p);
    pathSerializer.moveTo(w / 2, p);
    pathSerializer.lineTo(w - p, h - p);
    return pathSerializer.toString();
}
exports.default = pause;
