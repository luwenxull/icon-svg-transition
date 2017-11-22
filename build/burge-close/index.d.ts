/// <reference types="animejs" />
import anime = require('animejs');
import Icon, { IIconOption, IIconState } from '../Icon';
export declare type IBurgeCloseStateIndex = 'BURGE' | 'CLOSE';
export declare type IBurgeCloseStates = {
    [prop in IBurgeCloseStateIndex]: IBurgeCloseState;
};
export interface IBurgeCloseState extends IIconState {
    click(): IBurgeCloseStateIndex;
}
export interface IBurgeCloseOption extends IIconOption {
    active: IBurgeCloseStateIndex;
}
export default class BurgeCloseIcon extends Icon {
    protected active: IBurgeCloseStateIndex;
    protected states: IBurgeCloseStates;
    private rotate;
    constructor(options: IBurgeCloseOption);
    protected animate(from: any, to: any): anime.AnimeInstance;
}
