import Icon, { IIconOption, IIconState, IIconStates } from '../Icon'
import pause from './pause'
import play from './play'

export type IPausePlayStateIndex = 'PLAY' | 'PAUSE'

export type IPausePlayStates = {
  [prop in IPausePlayStateIndex]: IPausePlayState
}

export interface IPausePlayState extends IIconState {
  click(): IPausePlayStateIndex
}

export interface IPausePlayOption extends IIconOption {
  active: IPausePlayStateIndex
}

export default class PausePlayIcon extends Icon {
  protected active: IPausePlayStateIndex
  protected states: IPausePlayStates
  constructor(options: IPausePlayOption) {
    super(options)
    this.states = {
      PLAY: {
        path: play(),
        style: {
          fill: this.color,
          stroke: this.color,
        },
        click: () => {
          return 'PAUSE'
        },
      },
      PAUSE: {
        path: pause(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        click: () => {
          return 'PLAY'
        },
      },
    }
  }
}
