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

  public apply(parent: HTMLElement) {
    super.apply(parent)
    this.$icon.style('transform-origin', '50%')
  }

  protected clickCallback() {
    super.clickCallback()
    this.rotate += 180
    this.$icon.style('transform', `rotate(${this.rotate}deg)`)
  }
}
