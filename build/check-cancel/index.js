"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const cancel_1 = require("./cancel");
const check_1 = require("./check");
class CheckCancelIcon extends Icon_1.default {
    constructor(options) {
        super(options);
        this.rotate = 0;
        this.states = {
            CHECK: {
                path: check_1.default(),
                style: {
                    fill: 'none',
                    stroke: this.color,
                },
                click: () => {
                    return 'CANCEL';
                },
            },
            CANCEL: {
                path: cancel_1.default(),
                style: {
                    fill: 'none',
                    stroke: this.color,
                },
                click: () => {
                    return 'CHECK';
                },
            },
        };
    }
}
exports.default = CheckCancelIcon;
