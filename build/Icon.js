"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anime = require("animejs");
const forEach = require("lodash/forEach");
const util_1 = require("./util");
const allowedOptions = new Set(['active', 'color', 'size', 'strokeWidth', 'duration', 'override']);
class Icon {
    constructor(options) {
        this.color = '#000';
        this.size = [24, 24];
        this.strokeWidth = 1;
        this.duration = 400;
        this.override = false;
        this.states = null;
        this._animing = false;
        this.anime = null;
        this.$svg = null;
        this.$icon = null;
        forEach(options, (value, key) => {
            if (allowedOptions.has(key)) {
                this[key] = value;
            }
            else {
                util_1.warn('Not allowed option: ' + key);
            }
        });
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
        this.$svg.addEventListener('click', () => {
            this.animate();
            this.applyColor();
        });
        this.applyColor();
    }
    stateTransform(action) {
        this.active = this.states[this.active][action]();
    }
    animate() {
        if (!this.override && this._animing) {
            return;
        }
        let from = this.states[this.active].path;
        if (this._animing) {
            from = this.$icon.getAttribute('d');
            anime.remove(this.$icon);
        }
        this.stateTransform('click');
        const to = this.states[this.active].path;
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
}
exports.default = Icon;
