/// <reference types="animejs" />
import anime = require('animejs');
export interface IIcon {
    apply(parent: HTMLElement): void;
}
export interface IIconState {
    path: string;
    style: object;
    click(): keyof IIconStates;
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
}
export default abstract class Icon implements IIcon {
    protected color: string;
    protected size: number[];
    protected strokeWidth: number;
    protected duration: number;
    protected override: boolean;
    protected states: IIconStates;
    protected active: keyof IIconStates;
    protected _animing: boolean;
    protected anime: anime.AnimeInstance;
    protected $svg: SVGGElement;
    protected $icon: SVGGElement;
    constructor(options: IIconOption);
    apply(parent: HTMLElement): void;
    protected stateTransform(action: string): void;
    protected animate(): void;
    protected applyColor(): void;
}
