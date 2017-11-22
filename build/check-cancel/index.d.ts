import Icon, { IIconOption, IIconStateSingle } from '../Icon';
export declare type ICheckCancelStateIndex = 'CHECK' | 'CANCEL';
export declare type ICheckCancelState = {
    [prop in ICheckCancelStateIndex]: IIconStateSingle;
};
export interface ICheckCancelOption extends IIconOption {
    active: ICheckCancelStateIndex;
}
export default class CheckCancelIcon extends Icon {
    protected active: ICheckCancelStateIndex;
    protected state: ICheckCancelState;
    private rotate;
    constructor(options: ICheckCancelOption);
}
