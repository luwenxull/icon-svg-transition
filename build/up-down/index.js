"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const down_1 = require("./down");
const up_1 = require("./up");
class UpDoubleIcon extends Icon_1.default {
    constructor(options) {
        const color = options.color || '#000';
        super(options, {
            UP: {
                path: up_1.default(),
                style: {
                    fill: color,
                    stroke: color,
                },
            },
            DOWN: {
                path: down_1.default(),
                style: {
                    fill: 'none',
                    stroke: color,
                },
            },
        });
    }
}
exports.default = UpDoubleIcon;
