import Icon, { IIcon, IIconOption, IIconState, IIconStates } from '../Icon'
import down from './down'
import up from './up'

export type UpDownStateIndex = 'UP' | 'DOWN'

export type UpDownStates = {
  [prop in UpDownStateIndex]: IIconState
}

export interface IUpDoubleOption extends IIconOption {
  active: UpDownStateIndex
  events: {
    [prop: string]: (icon: IUpDoubleIcon) => void,
  }
}

export interface IUpDoubleIcon extends IIcon {
  to(state: UpDownStateIndex): void
}

export default class UpDoubleIcon extends Icon implements IUpDoubleIcon {
  protected active: UpDownStateIndex
  protected states: UpDownStates
  constructor(options: IUpDoubleOption) {
    const color = options.color || '#000'
    super(options, {
      UP: {
        path: up(),
        style: {
          fill: color,
          stroke: color,
        },
      },
      DOWN: {
        path: down(),
        style: {
          fill: 'none',
          stroke: color,
        },
      },
    } as UpDownStates)
  }
}
