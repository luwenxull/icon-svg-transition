import Icon, { IIcon, IIconOption, IIconState, IIconStates } from '../Icon'
import cancel from './cancel'
import check from './check'

export type ICheckCancelStateIndex = 'CHECK' | 'CANCEL'

export type ICheckCancelStates = {
  [prop in ICheckCancelStateIndex]: IIconState
}

export interface ICheckCancelOption extends IIconOption {
  active: ICheckCancelStateIndex
  events?: {
    [prop: string]: (icon: ICheckCancelIcon) => void,
  }
}

export interface ICheckCancelIcon extends IIcon {
  to(state: ICheckCancelStateIndex): void
}

export default class CheckCancelIcon extends Icon implements ICheckCancelIcon {
  protected active: ICheckCancelStateIndex
  protected states: ICheckCancelStates
  constructor(options: ICheckCancelOption) {
    const color = options.color || '#000'
    super(options, {
      CHECK: {
        path: check(),
        style: {
          fill: 'none',
          stroke: color,
        },
      },
      CANCEL: {
        path: cancel(),
        style: {
          fill: 'none',
          stroke: color,
        },
      },
    })
  }
}
