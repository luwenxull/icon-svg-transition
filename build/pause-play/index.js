"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const pause_1 = require("./pause");
const play_1 = require("./play");
class PausePlayIcon extends Icon_1.default {
    constructor(options) {
        super(options);
        this.states = {
            PLAY: {
                path: play_1.default(),
                style: {
                    fill: this.color,
                    stroke: this.color,
                },
                click: () => {
                    return 'PAUSE';
                },
            },
            PAUSE: {
                path: pause_1.default(),
                style: {
                    fill: 'none',
                    stroke: this.color,
                },
                click: () => {
                    return 'PLAY';
                },
            },
        };
    }
}
exports.default = PausePlayIcon;
