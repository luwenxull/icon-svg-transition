"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_path_1 = require("d3-path");
function pause() {
    const pathSerializer = d3_path_1.path();
    pathSerializer.moveTo(7, 7);
    pathSerializer.lineTo(17, 7);
    pathSerializer.moveTo(7, 12);
    pathSerializer.lineTo(17, 12);
    pathSerializer.moveTo(7, 17);
    pathSerializer.lineTo(17, 17);
    return pathSerializer.toString();
}
exports.default = pause;
