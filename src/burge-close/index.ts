import anime = require('animejs')
import { select } from 'd3-selection'
import Icon, { IIconOption, IIconStateSingle } from '../Icon'
import burge from './burge'
import close from './close'

export type IBurgeCloseStateIndex = 'BURGE' | 'CLOSE'

export type IBurgeCloseState = {
  [prop in IBurgeCloseStateIndex]: IIconStateSingle
}

export interface IBurgeCloseOption extends IIconOption {
  active: IBurgeCloseStateIndex
}

export default class BurgeCloseIcon extends Icon {
  protected active: IBurgeCloseStateIndex
  protected state: IBurgeCloseState
  private rotate = 0
  constructor(options: IBurgeCloseOption) {
    super(options)
    this.state = {
      BURGE: {
        path: burge(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        transfer: () => {
          this.active = 'CLOSE'
        },
      },
      CLOSE: {
        path: close(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        transfer: () => {
          this.active = 'BURGE'
        },
      },
    }
  }

  protected clickCallback() {
    super.clickCallback()
    this.rotate += 180
    anime({
      targets: this.$icon.node(),
      rotate: this.rotate,
      easing: 'linear',
      duration: this.duration,
    })
  }
}
