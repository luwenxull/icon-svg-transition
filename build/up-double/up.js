"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_path_1 = require("d3-path");
function pause() {
    const pathSerializer = d3_path_1.path();
    const width = 24;
    const height = 24;
    const padding = 3;
    pathSerializer.moveTo(padding, height - padding);
    pathSerializer.lineTo(width / 2, padding);
    pathSerializer.moveTo(width / 2, padding);
    pathSerializer.lineTo(width - padding, height - padding);
    pathSerializer.moveTo(padding, height - padding);
    pathSerializer.lineTo(width / 2, padding);
    pathSerializer.moveTo(width / 2, padding);
    pathSerializer.lineTo(width - padding, height - padding);
    return pathSerializer.toString();
}
exports.default = pause;
