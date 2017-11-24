"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const burge_1 = require("./burge");
const close_1 = require("./close");
class BurgeCloseIcon extends Icon_1.default {
    constructor(options) {
        const color = options.color || '#000';
        super(options, {
            BURGE: {
                path: burge_1.default(),
                style: {
                    fill: 'none',
                    stroke: color,
                },
            },
            CLOSE: {
                path: close_1.default(),
                style: {
                    fill: 'none',
                    stroke: color,
                },
            },
        });
    }
}
exports.default = BurgeCloseIcon;
