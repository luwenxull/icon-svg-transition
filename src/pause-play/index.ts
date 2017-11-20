import { select } from 'd3-selection'
import Icon, { IStateSingle } from '../Icon'
import pause from './pause'
import play from './play'

export type IPausePlayStateIndex = 'PLAY' | 'PAUSE'

export type IPausePlayState = {
  [state in keyof IPausePlayStateIndex]: IStateSingle
}

export default class PausePlayIcon extends Icon {
  protected _active: IPausePlayStateIndex
  constructor(active: IPausePlayStateIndex) {
    super()
    this._active = active
    this.state = {
      PLAY: {
        path: play(),
        transfer: () => {
          this._active = 'PAUSE'
        },
      },
      PAUSE: {
        path: pause(),
        transfer: () => {
          this._active = 'PLAY'
        },
      },
    }
  }
}
