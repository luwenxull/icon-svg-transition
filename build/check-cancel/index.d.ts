import Icon, { IIconOption, IIconState } from '../Icon';
export declare type ICheckCancelStateIndex = 'CHECK' | 'CANCEL';
export declare type ICheckCancelStates = {
    [prop in ICheckCancelStateIndex]: ICheckCancelState;
};
export interface ICheckCancelState extends IIconState {
    click(): ICheckCancelStateIndex;
}
export interface ICheckCancelOption extends IIconOption {
    active: ICheckCancelStateIndex;
}
export default class CheckCancelIcon extends Icon {
    protected active: ICheckCancelStateIndex;
    protected states: ICheckCancelStates;
    private rotate;
    constructor(options: ICheckCancelOption);
}
