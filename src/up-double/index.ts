import Icon, { IIcon, IIconOption, IIconState, IIconStates } from '../Icon'
import double from './double'
import up from './up'

export type UpDoubleStateIndex = 'UP' | 'DOUBLE'

export type IUpDoubleStates = {
  [prop in UpDoubleStateIndex]: IIconState
}

export interface IUpDoubleOption extends IIconOption {
  active: UpDoubleStateIndex
  events: {
    [prop: string]: (icon: IUpDoubleIcon) => void,
  }
}

export interface IUpDoubleIcon extends IIcon {
  to(state: UpDoubleStateIndex): void
}

export default class UpDoubleIcon extends Icon implements IUpDoubleIcon {
  protected active: UpDoubleStateIndex
  protected states: IUpDoubleStates
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
      DOUBLE: {
        path: double(),
        style: {
          fill: 'none',
          stroke: color,
        },
      },
    })
  }
}
