"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const burge_1 = require("./burge");
const close_1 = require("./close");
class BurgeCloseIcon extends Icon_1.default {
    constructor(options) {
        super(options);
        this.rotate = 0;
        this.state = {
            BURGE: {
                path: burge_1.default(),
                style: {
                    fill: 'none',
                    stroke: this.color,
                },
                transfer: () => {
                    this.active = 'CLOSE';
                },
            },
            CLOSE: {
                path: close_1.default(),
                style: {
                    fill: 'none',
                    stroke: this.color,
                },
                transfer: () => {
                    this.active = 'BURGE';
                },
            },
        };
    }
    apply(parent) {
        super.apply(parent);
        this.$icon.style('transform-origin', '50%');
    }
    clickCallback() {
        super.clickCallback();
        this.rotate += 180;
        this.$icon.style('transform', `rotate(${this.rotate}deg)`);
    }
}
exports.default = BurgeCloseIcon;
