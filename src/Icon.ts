import { select, Selection } from 'd3-selection'
import * as _ from 'lodash'

export interface IIcon {
  apply(parent: HTMLElement): void
}

export interface IIconStateSingle {
  path: string
  style: object
  transfer(): void
}

export interface IIconState {
  [prop: string]: IIconStateSingle
}

export interface IIconOption {
  active: keyof IIconState
  color: string
}

export default abstract class Icon implements IIcon {
  protected active: keyof IIconState
  protected color: string
  protected state: IIconState
  protected $svg: Selection<HTMLElement, any, HTMLElement, any>
  protected $icon: Selection<HTMLElement, any, HTMLElement, any>
  constructor(options: IIconOption) {
    this.$svg = null
    this.$icon = null
    this.active = options.active
    this.color = options.color
  }

  public apply(parent: HTMLElement): void {
    this.$svg = select(parent).append('svg')
    this.$svg.attr('width', 40).attr('height', 40).attr('viewBox', '0 0 24 24')
    this.$icon = this.$svg.append('path')
    this.$icon
      .style('transition', '0.4s')
      .attr('d', this.state[this.active].path)
    this.$svg.on('click', () => {
      this.clickCallback()
    })
    this.applyColor()
  }

  protected clickCallback(): void {
    this.state[this.active].transfer()
    this.$icon.attr('d', this.state[this.active].path)
    this.applyColor()
  }

  protected applyColor(): void {
    _.forEach(this.state[this.active].style, (value, key) => {
      this.$icon.style(key, value)
    })
  }
}
