"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const pause_1 = require("./pause");
const play_1 = require("./play");
class PausePlayIcon extends Icon_1.default {
    constructor(options) {
        const color = options.color || '#000';
        super(options, {
            PLAY: {
                path: play_1.default(),
                style: {
                    fill: color,
                    stroke: color,
                },
            },
            PAUSE: {
                path: pause_1.default(),
                style: {
                    fill: 'none',
                    stroke: color,
                },
            },
        });
    }
}
exports.default = PausePlayIcon;
