import Icon, { IIcon, IIconOption, IIconState } from '../Icon';
export declare type BurgeCloseStateIndex = 'BURGE' | 'CLOSE';
export declare type BurgeCloseStates = {
    [prop in BurgeCloseStateIndex]: IIconState;
};
export interface IBurgeCloseOption extends IIconOption {
    active: BurgeCloseStateIndex;
    events?: {
        [prop: string]: (icon: IBurgeCloseIcon) => void;
    };
}
export interface IBurgeCloseIcon extends IIcon {
    to(state: BurgeCloseStateIndex): void;
}
export default class BurgeCloseIcon extends Icon implements IBurgeCloseIcon {
    protected active: BurgeCloseStateIndex;
    protected states: BurgeCloseStates;
    constructor(options: IBurgeCloseOption);
}
