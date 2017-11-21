"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.speed = options.speed || 0.4;
    }
    apply(parent) {
        this.$svg = d3_selection_1.select(parent).append('svg');
        this.$svg.attr('width', this.size[0]).attr('height', this.size[1]).attr('viewBox', '0 0 24 24');
        this.$icon = this.$svg.append('path');
        this.$icon
            .style('transition', `${this.speed}s`)
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
        this.state[this.active].transfer();
        this.$icon.attr('d', this.state[this.active].path);
        this.applyColor();
    }
    applyColor() {
        _.forEach(this.state[this.active].style, (value, key) => {
            this.$icon.style(key, value);
        });
    }
}
exports.default = Icon;
