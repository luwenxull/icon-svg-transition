"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anime = require("animejs");
const forEach = require("lodash/forEach");
const util_1 = require("./util");
const allowedOptions = new Set(['active', 'color', 'size', 'strokeWidth', 'duration', 'override', 'events']);
class Icon {
    constructor(options, states) {
        this.states = states;
        this.size = [24, 24];
        this.strokeWidth = 1;
        this.duration = 400;
        this.override = false;
        this.events = null;
        this._animing = false;
        this.anime = null;
        this.$svg = null;
        this.$icon = null;
        if (options.active) {
            if (this.checkIfStateValid(options.active)) {
                forEach(options, (value, key) => {
                    if (allowedOptions.has(key)) {
                        this[key] = value;
                    }
                    else {
                        util_1.warn('Not allowed option: ' + key);
                    }
                });
            }
        }
        else {
            util_1.error('Need a initial state!', true);
        }
    }
    apply(parent) {
        this.$svg = parent.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
        this.$svg.setAttribute('width', String(this.size[0]));
        this.$svg.setAttribute('height', String(this.size[1]));
        this.$svg.setAttribute('viewBox', '0 0 24 24');
        this.$icon = this.$svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
        this.$icon.setAttribute('d', this.states[this.active].path);
        const style = this.$icon.style;
        style.setProperty('stroke-width', String(this.strokeWidth));
        style.setProperty('stroke-lineCap', 'round');
        style.setProperty('transform-origin', '50%');
        this.applyColor();
        if (this.events) {
            forEach(this.events, (callback, key) => {
                this.$svg.addEventListener(key, () => {
                    callback.call(null, this);
                });
            });
        }
    }
    to(state) {
        if (state !== this.active) {
            if (this.checkIfStateValid(state)) {
                this.animate(state);
            }
        }
    }
    isAnimating() {
        return this._animing;
    }
    toggle() {
        forEach(this.states, (state, key) => {
            if (this.active !== key) {
                this.to(key);
                return false;
            }
        });
    }
    getState() {
        return this.states[this.active];
    }
    animate(state) {
        if (!this.override && this._animing) {
            return; /* 不允许覆盖未完成动画 */
        }
        let from;
        if (this._animing) {
            from = this.$icon.getAttribute('d');
            anime.remove(this.$icon);
        }
        else {
            from = this.getState().path;
        }
        this.active = state;
        const to = this.getState().path;
        this.anime = anime({
            targets: this.$icon,
            d: [
                from,
                to,
            ],
            easing: 'easeOutCubic',
            duration: this.duration,
            begin: () => {
                this._animing = true;
            },
            complete: () => {
                this._animing = false;
            },
        });
    }
    applyColor() {
        const style = this.$icon.style;
        forEach(this.states[this.active].style, (value, key) => {
            style.setProperty(key, value);
        });
    }
    checkIfStateValid(state) {
        if (!this.states[state]) {
            util_1.warn('Not allowed state: ' + state);
            return false;
        }
        return true;
    }
}
exports.default = Icon;
