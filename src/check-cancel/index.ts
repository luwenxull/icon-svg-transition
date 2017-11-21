import { select } from 'd3-selection'
import Icon, { IIconOption, IIconStateSingle } from '../Icon'
import cancel from './cancel'
import check from './check'

export type ICheckCancelStateIndex = 'CHECK' | 'CANCEL'

export type ICheckCancelState = {
  [prop in ICheckCancelStateIndex]: IIconStateSingle
}

export interface ICheckCancelOption extends IIconOption {
  active: ICheckCancelStateIndex
}

export default class CheckCancelIcon extends Icon {
  protected active: ICheckCancelStateIndex
  protected state: ICheckCancelState
  private rotate = 0
  constructor(options: ICheckCancelOption) {
    super(options)
    this.state = {
      CHECK: {
        path: check(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        transfer: () => {
          this.active = 'CANCEL'
        },
      },
      CANCEL: {
        path: cancel(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        transfer: () => {
          this.active = 'CHECK'
        },
      },
    }
  }
}
