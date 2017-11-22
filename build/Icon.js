"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anime = require("animejs");
const d3_selection_1 = require("d3-selection");
const _ = require("lodash");
class Icon {
    constructor(options) {
        this.$svg = null;
        this.$icon = null;
        this.active = options.active;
        this.color = options.color || '#000';
        this.size = options.size || [24, 24];
        this.strokeWidth = options.strokeWidth || 1;
        this.duration = options.duration || 400;
    }
    apply(parent) {
        this.$svg = d3_selection_1.select(parent).append('svg');
        this.$svg.attr('width', this.size[0]).attr('height', this.size[1]).attr('viewBox', '0 0 24 24');
        this.$icon = this.$svg.append('path');
        this.$icon
            .style('stroke-width', this.strokeWidth)
            .style('stroke-lineCap', 'round')
            .style('transform-origin', '50%')
            .attr('d', this.state[this.active].path);
        this.$svg.on('click', () => {
            this.clickCallback();
        });
        this.applyColor();
    }
    clickCallback() {
        const from = this.state[this.active].path;
        this.state[this.active].transfer();
        const to = this.state[this.active].path;
        anime({
            targets: this.$icon.node(),
            d: [
                from,
                to,
            ],
            easing: 'linear',
            duration: this.duration,
        });
        this.applyColor();
    }
    applyColor() {
        _.forEach(this.state[this.active].style, (value, key) => {
            this.$icon.style(key, value);
        });
    }
}
exports.default = Icon;
