import { Selection } from 'd3-selection';
export interface IIcon {
    apply(parent: HTMLElement): void;
}
export interface IIconStateSingle {
    path: string;
    style: object;
    transfer(): void;
}
export interface IIconState {
    [prop: string]: IIconStateSingle;
}
export interface IIconOption {
    active: keyof IIconState;
    color?: string;
    size?: number[];
    strokeWidth?: number;
    duration?: number;
}
export default abstract class Icon implements IIcon {
    protected active: keyof IIconState;
    protected color: string;
    protected size: number[];
    protected state: IIconState;
    protected strokeWidth: number;
    protected duration: number;
    protected $svg: Selection<HTMLElement, any, HTMLElement, any>;
    protected $icon: Selection<HTMLElement, any, HTMLElement, any>;
    constructor(options: IIconOption);
    apply(parent: HTMLElement): void;
    protected clickCallback(): void;
    protected applyColor(): void;
}
