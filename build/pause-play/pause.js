"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_path_1 = require("d3-path");
function pause() {
    const pathSerializer = d3_path_1.path();
    pathSerializer.moveTo(7, 5);
    pathSerializer.lineTo(7, 19);
    pathSerializer.moveTo(16, 5);
    pathSerializer.lineTo(16, 12);
    pathSerializer.lineTo(16, 19);
    return pathSerializer.toString();
}
exports.default = pause;
