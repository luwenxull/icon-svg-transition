import anime = require('animejs')
import forEach = require('lodash/forEach')
import { error, warn } from './util'

export interface IIcon {
  apply(parent: HTMLElement): void
  to(state: keyof IIconStates): void
  isAnimating(): boolean
  toggle(): void
}

export interface IIconState {
  path: string
  style: object
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
  events?: {
    [prop: string]: (icon: IIcon) => void,
  }
}

const allowedOptions = new Set<string>(['active', 'color', 'size', 'strokeWidth', 'duration', 'override', 'events'])

export default abstract class Icon implements IIcon {
  protected size: number[] = [24, 24]
  protected strokeWidth: number = 1
  protected duration: number = 400
  protected override: boolean = false
  protected events: object = null
  protected active: keyof IIconStates
  protected _animing: boolean = false
  protected anime: anime.AnimeInstance = null
  protected $svg: SVGGElement = null
  protected $icon: SVGGElement = null
  constructor(options: IIconOption, protected states: IIconStates) {
    if (options.active) {
      if (this.checkIfStateValid(options.active)) {
        forEach(options, (value, key) => {
          if (allowedOptions.has(key)) {
            this[key] = value
          } else {
            warn('Not allowed option: ' + key)
          }
        })
      }
    } else {
      error('Need a initial state!', true)
    }
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
    this.applyColor()
    if (this.events) {
      forEach(this.events, (callback, key) => {
        this.$svg.addEventListener(key, () => {
          callback.call(null, this)
        })
      })
    }
  }

  public to(state: keyof IIconStates): void {
    if (state !== this.active) {
      if (this.checkIfStateValid(state)) {
        this.animate(state)
      }
    }
  }

  public isAnimating(): boolean {
    return this._animing
  }

  public toggle(): void {
    forEach(this.states, (state, key) => {
      if (this.active !== key) {
        this.to(key)
        return false
      }
    })
  }

  protected getState(): IIconState {
    return this.states[this.active]
  }

  protected animate(state: keyof IIconStates): void {
    if (!this.override && this._animing) {
      return /* 不允许覆盖未完成动画 */
    }
    let from
    if (this._animing) {
      from = this.$icon.getAttribute('d')
      anime.remove(this.$icon)
    } else {
      from = this.getState().path
    }
    this.active = state
    const to = this.getState().path
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

  private checkIfStateValid(state: string): boolean {
    if (!this.states[state]) {
      warn('Not allowed state: ' + state)
      return false
    }
    return true
  }
}
