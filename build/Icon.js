"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anime = require("animejs");
const d3_selection_1 = require("d3-selection");
const _ = require("lodash");
class Icon {
    constructor(options) {
        this.color = '#000';
        this.size = [24, 24];
        this.strokeWidth = 1;
        this.duration = 400;
        this.states = null;
        this.anime = null;
        this.$svg = null;
        this.$icon = null;
        _.assign(this, options);
    }
    apply(parent) {
        this.$svg = d3_selection_1.select(parent).append('svg');
        this.$svg.attr('width', this.size[0]).attr('height', this.size[1]).attr('viewBox', '0 0 24 24');
        this.$icon = this.$svg.append('path');
        this.$icon
            .style('stroke-width', this.strokeWidth)
            .style('stroke-lineCap', 'round')
            .style('transform-origin', '50%')
            .attr('d', this.states[this.active].path);
        this.$svg.on('click', () => {
            const from = this.states[this.active].path;
            this.stateTransform('click');
            const to = this.states[this.active].path;
            this.anime = this.animate(from, to);
            this.applyColor();
        });
        this.applyColor();
    }
    stateTransform(action) {
        this.active = this.states[this.active][action]();
    }
    animate(from, to) {
        return anime({
            targets: this.$icon.node(),
            d: [
                from,
                to,
            ],
            easing: 'easeOutCubic',
            duration: this.duration,
        });
    }
    applyColor() {
        _.forEach(this.states[this.active].style, (value, key) => {
            this.$icon.style(key, value);
        });
    }
}
exports.default = Icon;
