"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function warn(msg) {
    if (console && typeof console.warn === 'function') {
        // tslint:disable-next-line:no-console
        console.warn(msg);
    }
}
exports.warn = warn;
function error(msg, needThrow = false) {
    if (needThrow) {
        throw new Error(msg);
    }
    if (console && typeof console.error === 'function') {
        // tslint:disable-next-line:no-console
        console.error(msg);
    }
}
exports.error = error;
