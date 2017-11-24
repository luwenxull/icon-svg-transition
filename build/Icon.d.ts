/// <reference types="animejs" />
import anime = require('animejs');
export interface IIcon {
    apply(parent: HTMLElement): void;
    to(state: keyof IIconStates): void;
    isAnimating(): boolean;
    toggle(): void;
}
export interface IIconState {
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
    events?: {
        [prop: string]: (icon: IIcon) => void;
    };
}
export default abstract class Icon implements IIcon {
    protected states: IIconStates;
    protected size: number[];
    protected strokeWidth: number;
    protected duration: number;
    protected override: boolean;
    protected events: object;
    protected active: keyof IIconStates;
    protected _animing: boolean;
    protected anime: anime.AnimeInstance;
    protected $svg: SVGGElement;
    protected $icon: SVGGElement;
    constructor(options: IIconOption, states: IIconStates);
    apply(parent: HTMLElement): void;
    to(state: keyof IIconStates): void;
    isAnimating(): boolean;
    toggle(): void;
    protected getState(): IIconState;
    protected animate(state: keyof IIconStates): void;
    protected applyColor(): void;
    private checkIfStateValid(state);
}
