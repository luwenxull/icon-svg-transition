/// <reference types="animejs" />
import anime = require('animejs');
export interface IIcon {
    apply(parent: HTMLElement): void;
}
export interface IIconStateAction {
    enter?(): keyof IIconStates;
    click?(): keyof IIconStates;
    leave?(): keyof IIconStates;
}
export interface IIconState extends IIconStateAction {
    path: string;
    style: object;
}
export interface IIconStates {
    [prop: string]: IIconState;
}
export interface IIconOption {
    active: keyof IIconStates;
    color?: string;
    size?: number[];
    strokeWidth?: number;
    duration?: number;
    override?: boolean;
    events?: object;
}
export default abstract class Icon implements IIcon {
    protected color: string;
    protected size: number[];
    protected strokeWidth: number;
    protected duration: number;
    protected override: boolean;
    protected events: object;
    protected states: IIconStates;
    protected active: keyof IIconStates;
    protected _animing: boolean;
    protected anime: anime.AnimeInstance;
    protected $svg: SVGGElement;
    protected $icon: SVGGElement;
    constructor(options: IIconOption);
    apply(parent: HTMLElement): void;
    protected bindActionEvents(): void;
    protected getState(): IIconState;
    protected stateTransform(action: string): boolean;
    protected animate(actionType: keyof IIconStateAction): void;
    protected applyColor(): void;
}
