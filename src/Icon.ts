import { select, Selection } from 'd3-selection'

export interface IIcon {
  apply(parent: HTMLElement): void
}

export interface IStateSingle {
  path: string
  transfer(): void
}

export interface IIconState {
  [prop: string]: IStateSingle
}

export default abstract class Icon implements IIcon {
  protected state: IIconState
  protected _active: keyof IIconState
  protected $svg: Selection<HTMLElement, any, HTMLElement, any>
  protected $icon: Selection<HTMLElement, any, HTMLElement, any>
  constructor() {
    this.$icon = null
  }

  public apply(parent: HTMLElement) {
    this.$svg = select(parent).append('svg')
    this.$svg.attr('viewbox', '0 0 24 24')
    this.$icon = this.$svg.append('path')
    this.$icon
      .style('transition', '0.4s')
      .attr('d', this.state[this._active].path)
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
    this.listenToClick()
  }

  protected listenToClick() {
    this.$svg.on('click', () => {
      this.state[this._active].transfer()
      this.$icon.attr('d', this.state[this._active].path)
    })
  }

}
