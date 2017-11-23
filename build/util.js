"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function warn(msg) {
    if (typeof console.warn === 'function') {
        // tslint:disable-next-line:no-console
        console.warn(msg);
    }
}
exports.warn = warn;
