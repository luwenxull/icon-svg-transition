import Icon, { IIconOption, IIconStateSingle } from '../Icon';
export declare type IBurgeCloseStateIndex = 'BURGE' | 'CLOSE';
export declare type IBurgeCloseState = {
    [prop in IBurgeCloseStateIndex]: IIconStateSingle;
};
export interface IBurgeCloseOption extends IIconOption {
    active: IBurgeCloseStateIndex;
}
export default class BurgeCloseIcon extends Icon {
    protected active: IBurgeCloseStateIndex;
    protected state: IBurgeCloseState;
    private rotate;
    constructor(options: IBurgeCloseOption);
    apply(parent: HTMLElement): void;
    protected clickCallback(): void;
}
