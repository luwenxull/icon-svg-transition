import Icon, { IIcon, IIconOption, IIconState, IIconStates } from '../Icon'
import pause from './pause'
import play from './play'

export type PausePlayStateIndex = 'PLAY' | 'PAUSE'

export type PausePlayStates = {
  [prop in PausePlayStateIndex]: IIconState
}

export interface IPausePlayOption extends IIconOption {
  active: PausePlayStateIndex
  events?: {
    [prop: string]: (icon: IPausePlayIcon) => void,
  }
}

export interface IPausePlayIcon extends IIcon {
  to(state: PausePlayStateIndex): void
}

export default class PausePlayIcon extends Icon {
  protected active: PausePlayStateIndex
  protected states: PausePlayStates
  constructor(options: IPausePlayOption) {
    const color = options.color || '#000'
    super(options, {
      PLAY: {
        path: play(),
        style: {
          fill: color,
          stroke: color,
        },
      },
      PAUSE: {
        path: pause(),
        style: {
          fill: 'none',
          stroke: color,
        },
      },
    } as PausePlayStates)
  }
}
