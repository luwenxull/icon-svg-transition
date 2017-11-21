"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_selection_1 = require("d3-selection");
const _ = require("lodash");
class Icon {
    constructor(options) {
        this.$svg = null;
        this.$icon = null;
        this.active = options.active;
        this.color = options.color;
    }
    apply(parent) {
        this.$svg = d3_selection_1.select(parent).append('svg');
        this.$svg.attr('width', 40).attr('height', 40).attr('viewBox', '0 0 24 24');
        this.$icon = this.$svg.append('path');
        this.$icon
            .style('transition', '0.4s')
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
