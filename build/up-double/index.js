"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const double_1 = require("./double");
const up_1 = require("./up");
class UpDoubleIcon extends Icon_1.default {
    constructor(options) {
        super(options);
        this.states = {
            UP: {
                path: up_1.default(),
                style: {
                    fill: this.color,
                    stroke: this.color,
                },
                enter: () => {
                    return 'DOUBLE';
                },
            },
            DOUBLE: {
                path: double_1.default(),
                style: {
                    fill: 'none',
                    stroke: this.color,
                },
                leave: () => {
                    return 'UP';
                },
            },
        };
    }
    bindActionEvents() {
        this.$svg.addEventListener('mouseenter', () => {
            this.animate('enter');
        });
        this.$svg.addEventListener('mouseleave', () => {
            this.animate('leave');
        });
    }
}
exports.default = UpDoubleIcon;
