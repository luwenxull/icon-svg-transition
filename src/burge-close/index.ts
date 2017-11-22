import anime = require('animejs')
import { select } from 'd3-selection'
import Icon, { IIconOption, IIconState, IIconStates } from '../Icon'
import burge from './burge'
import close from './close'

export type IBurgeCloseStateIndex = 'BURGE' | 'CLOSE'

export type IBurgeCloseStates = {
  [prop in IBurgeCloseStateIndex]: IBurgeCloseState
}

export interface IBurgeCloseState extends IIconState {
  click(): IBurgeCloseStateIndex
}

export interface IBurgeCloseOption extends IIconOption {
  active: IBurgeCloseStateIndex
}

export default class BurgeCloseIcon extends Icon {
  protected active: IBurgeCloseStateIndex
  protected states: IBurgeCloseStates
  private rotate = 0
  constructor(options: IBurgeCloseOption) {
    super(options)
    this.states = {
      BURGE: {
        path: burge(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        click: () => {
          return 'CLOSE'
        },
      },
      CLOSE: {
        path: close(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        click: () => {
          return 'BURGE'
        },
      },
    }
  }

  protected animate() {
    this.rotate += 180
    anime({
      targets: this.$icon.node(),
      rotate: this.rotate,
      easing: 'easeOutCubic',
      duration: this.duration,
    })
    super.animate()
  }
}
