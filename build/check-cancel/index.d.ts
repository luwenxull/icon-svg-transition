import Icon, { IIcon, IIconOption, IIconState } from '../Icon';
export declare type CheckCancelStateIndex = 'CHECK' | 'CANCEL';
export declare type CheckCancelStates = {
    [prop in CheckCancelStateIndex]: IIconState;
};
export interface ICheckCancelOption extends IIconOption {
    active: CheckCancelStateIndex;
    events?: {
        [prop: string]: (icon: ICheckCancelIcon) => void;
    };
}
export interface ICheckCancelIcon extends IIcon {
    to(state: CheckCancelStateIndex): void;
}
export default class CheckCancelIcon extends Icon implements ICheckCancelIcon {
    protected active: CheckCancelStateIndex;
    protected states: CheckCancelStates;
    constructor(options: ICheckCancelOption);
}
