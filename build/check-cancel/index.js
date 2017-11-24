"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const cancel_1 = require("./cancel");
const check_1 = require("./check");
class CheckCancelIcon extends Icon_1.default {
    constructor(options) {
        const color = options.color || '#000';
        super(options, {
            CHECK: {
                path: check_1.default(),
                style: {
                    fill: 'none',
                    stroke: color,
                },
            },
            CANCEL: {
                path: cancel_1.default(),
                style: {
                    fill: 'none',
                    stroke: color,
                },
            },
        });
    }
}
exports.default = CheckCancelIcon;
