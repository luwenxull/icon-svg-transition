import anime = require('animejs')
import Icon, { IIcon, IIconOption, IIconState, IIconStates } from '../Icon'
import burge from './burge'
import close from './close'

export type BurgeCloseStateIndex = 'BURGE' | 'CLOSE'

export type BurgeCloseStates = {
  [prop in BurgeCloseStateIndex]: IIconState
}

export interface IBurgeCloseOption extends IIconOption {
  active: BurgeCloseStateIndex
  events?: {
    [prop: string]: (icon: IBurgeCloseIcon) => void,
  }
}

export interface IBurgeCloseIcon extends IIcon {
  to(state: BurgeCloseStateIndex): void
}

export default class BurgeCloseIcon extends Icon implements IBurgeCloseIcon {
  protected active: BurgeCloseStateIndex
  protected states: BurgeCloseStates
  constructor(options: IBurgeCloseOption) {
    const color = options.color || '#000'
    super(options, {
      BURGE: {
        path: burge(),
        style: {
          fill: 'none',
          stroke: color,
        },
      },
      CLOSE: {
        path: close(),
        style: {
          fill: 'none',
          stroke: color,
        },
      },
    } as BurgeCloseStates)
  }
}
