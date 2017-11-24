import Icon, { IIcon, IIconOption, IIconState, IIconStates } from '../Icon'
import cancel from './cancel'
import check from './check'

export type CheckCancelStateIndex = 'CHECK' | 'CANCEL'

export type CheckCancelStates = {
  [prop in CheckCancelStateIndex]: IIconState
}

export interface ICheckCancelOption extends IIconOption {
  active: CheckCancelStateIndex
  events?: {
    [prop: string]: (icon: ICheckCancelIcon) => void,
  }
}

export interface ICheckCancelIcon extends IIcon {
  to(state: CheckCancelStateIndex): void
}

export default class CheckCancelIcon extends Icon implements ICheckCancelIcon {
  protected active: CheckCancelStateIndex
  protected states: CheckCancelStates
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
    } as CheckCancelStates)
  }
}
