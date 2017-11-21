"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_path_1 = require("d3-path");
function pause() {
    const pathSerializer = d3_path_1.path();
    const width = 24;
    const height = 24;
    const padding = 3;
    pathSerializer.moveTo(padding, padding * 3);
    pathSerializer.lineTo(padding * 3, height - padding);
    pathSerializer.moveTo(padding * 3, height - padding);
    pathSerializer.lineTo(width - padding, padding * 2);
    return pathSerializer.toString();
}
exports.default = pause;
