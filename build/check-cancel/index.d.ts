import Icon, { IIcon, IIconOption, IIconState } from '../Icon';
export declare type ICheckCancelStateIndex = 'CHECK' | 'CANCEL';
export declare type ICheckCancelStates = {
    [prop in ICheckCancelStateIndex]: IIconState;
};
export interface ICheckCancelOption extends IIconOption {
    active: ICheckCancelStateIndex;
    events?: {
        [prop: string]: (icon: ICheckCancelIcon) => void;
    };
}
export interface ICheckCancelIcon extends IIcon {
    to(state: ICheckCancelStateIndex): void;
}
export default class CheckCancelIcon extends Icon implements ICheckCancelIcon {
    protected active: ICheckCancelStateIndex;
    protected states: ICheckCancelStates;
    constructor(options: ICheckCancelOption);
}
