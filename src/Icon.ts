import anime = require('animejs')
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
  protected $svg: SVGGElement = null
  protected $icon: SVGGElement = null
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
    this.$svg = parent.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))
    this.$svg.setAttribute('width', String(this.size[0]))
    this.$svg.setAttribute('height', String(this.size[1]))
    this.$svg.setAttribute('viewBox', '0 0 24 24')
    this.$icon = this.$svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
    this.$icon.setAttribute('d', this.states[this.active].path)
    const style = this.$icon.style
    style.setProperty('stroke-width', String(this.strokeWidth))
    style.setProperty('stroke-lineCap', 'round')
    style.setProperty('transform-origin', '50%')
    this.$svg.addEventListener('click', () => {
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
      from = this.$icon.getAttribute('d')
      anime.remove(this.$icon)
    }
    this.stateTransform('click')
    const to = this.states[this.active].path
    this.anime = anime({
      targets: this.$icon,
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
    const style = this.$icon.style
    forEach(this.states[this.active].style, (value, key) => {
      style.setProperty(key, value)
    })
  }
}
