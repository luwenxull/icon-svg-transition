import Icon, { IIconOption, IIconState, IIconStates } from '../Icon'
import double from './double'
import up from './up'

export type IUpDoubleStateIndex = 'UP' | 'DOUBLE'

export type IUpDoubleStates = {
  [prop in IUpDoubleStateIndex]: IUpDoubleState
}

export interface IUpDoubleState extends IIconState {
  enter?(): IUpDoubleStateIndex
  leave?(): IUpDoubleStateIndex
}

export interface IUpDoubleOption extends IIconOption {
  active: IUpDoubleStateIndex
}

export default class UpDoubleIcon extends Icon {
  protected active: IUpDoubleStateIndex
  protected states: IUpDoubleStates
  constructor(options: IUpDoubleOption) {
    super(options)
    this.states = {
      UP: {
        path: up(),
        style: {
          fill: this.color,
          stroke: this.color,
        },
        enter: () => {
          return 'DOUBLE'
        },
      },
      DOUBLE: {
        path: double(),
        style: {
          fill: 'none',
          stroke: this.color,
        },
        leave: () => {
          return 'UP'
        },
      },
    }
  }

  protected bindActionEvents() {
    this.$svg.addEventListener('mouseenter', () => {
      this.animate('enter')
    })
    this.$svg.addEventListener('mouseleave', () => {
      this.animate('leave')
    })
  }
}
