"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_path_1 = require("d3-path");
function play() {
    const pathSerializer = d3_path_1.path();
    const width = 18.6;
    const height = 24;
    const padding = 3;
    pathSerializer.moveTo(padding, padding);
    pathSerializer.lineTo(padding, height - padding);
    pathSerializer.moveTo(padding, padding);
    pathSerializer.lineTo(width - padding, height / 2);
    pathSerializer.lineTo(padding, height - padding);
    return pathSerializer.toString();
}
exports.default = play;
