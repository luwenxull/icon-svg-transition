import Icon, { IIconOption, IIconState, IIconStates } from '../Icon'
import cancel from './cancel'
import check from './check'

export type ICheckCancelStateIndex = 'CHECK' | 'CANCEL'

export type ICheckCancelStates = {
  [prop in ICheckCancelStateIndex]: ICheckCancelState
}

export interface ICheckCancelState extends IIconState {
  click(): ICheckCancelStateIndex
}

export interface ICheckCancelOption extends IIconOption {
  active: ICheckCancelStateIndex
}

export default class CheckCancelIcon extends Icon {
  protected active: ICheckCancelStateIndex
  protected states: ICheckCancelStates
  private rotate = 0
  constructor(options: ICheckCancelOption) {
    super(options)
    this.states = {
      CHECK: {
        path: check(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        click: () => {
          return 'CANCEL'
        },
      },
      CANCEL: {
        path: cancel(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        click: () => {
          return 'CHECK'
        },
      },
    }
  }
}
