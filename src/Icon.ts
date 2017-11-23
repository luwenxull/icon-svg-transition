import anime = require('animejs')
import { select, Selection } from 'd3-selection'
import forEach = require('lodash/forEach')
import { warn } from './util'

export interface IIcon {
  apply(parent: HTMLElement): void
}

export interface IIconState {
  path: string
  style: object
  click(): keyof IIconStates
}

export interface IIconStates {
  [prop: string]: IIconState
}

export interface IIconOption {
  active: keyof IIconStates
  color?: string
  size?: number[]
  strokeWidth?: number
  duration?: number
  override?: boolean
}

const allowedOptions = new Set<string>(['active', 'color', 'size', 'strokeWidth', 'duration', 'override'])

export default abstract class Icon implements IIcon {
  protected color: string = '#000'
  protected size: number[] = [24, 24]
  protected strokeWidth: number = 1
  protected duration: number = 400
  protected override: boolean = false
  protected states: IIconStates = null
  protected active: keyof IIconStates
  protected _animing: boolean = false
  protected anime: anime.AnimeInstance = null
  protected $svg: Selection<HTMLElement, any, HTMLElement, any> = null
  protected $icon: Selection<HTMLElement, any, HTMLElement, any> = null
  constructor(options: IIconOption) {
    forEach(options, (value, key) => {
      if (allowedOptions.has(key)) {
        this[key] = value
      } else {
        warn('Not allowed option: ' + key)
      }
    })
  }

  public apply(parent: HTMLElement): void {
    this.$svg = select(parent).append('svg')
    this.$svg.attr('width', this.size[0]).attr('height', this.size[1]).attr('viewBox', '0 0 24 24')
    this.$icon = this.$svg.append('path')
    this.$icon
      .style('stroke-width', this.strokeWidth)
      .style('stroke-lineCap', 'round')
      .style('transform-origin', '50%')
      .attr('d', this.states[this.active].path)
    this.$svg.on('click', () => {
      this.animate()
      this.applyColor()
    })
    this.applyColor()
  }

  protected stateTransform(action: string): void {
    this.active = this.states[this.active][action]()
  }

  protected animate(): void {
    if (!this.override && this._animing) {
      return
    }
    let from = this.states[this.active].path
    if (this._animing) {
      from = this.$icon.attr('d')
      anime.remove(this.$icon.node())
    }
    this.stateTransform('click')
    const to = this.states[this.active].path
    this.anime = anime({
      targets: this.$icon.node(),
      d: [
        from,
        to,
      ],
      easing: 'easeOutCubic',
      duration: this.duration,
      begin: () => {
        this._animing = true
      },
      complete: () => {
        this._animing = false
      },
    })
  }

  protected applyColor(): void {
    forEach(this.states[this.active].style, (value, key) => {
      this.$icon.style(key, value)
    })
  }
}
