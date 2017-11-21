import { select } from 'd3-selection'
import * as _ from 'lodash'
import Icon, { IIconOption, IIconStateSingle } from '../Icon'
import pause from './pause'
import play from './play'

export type IPausePlayStateIndex = 'PLAY' | 'PAUSE'

export type IPausePlayState = {
  [prop in IPausePlayStateIndex]: IIconStateSingle
}

export interface IPausePlayOption extends IIconOption {
  active: IPausePlayStateIndex
}

export default class PausePlayIcon extends Icon {
  protected active: IPausePlayStateIndex
  protected state: IPausePlayState
  constructor(options: IPausePlayOption) {
    super(options)
    this.state = {
      PLAY: {
        path: play(),
        style: {
          fill: this.color,
          stroke: this.color,
        },
        transfer: () => {
          this.active = 'PAUSE'
        },
      },
      PAUSE: {
        path: pause(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        transfer: () => {
          this.active = 'PLAY'
        },
      },
    }
  }

  protected applyColor(): void {
    _.forEach(this.state[this.active].style, (value, key) => {
      this.$icon.style(key, value)
    })
  }
}
