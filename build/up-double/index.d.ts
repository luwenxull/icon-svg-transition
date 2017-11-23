import Icon, { IIconOption, IIconState } from '../Icon';
export declare type IUpDoubleStateIndex = 'UP' | 'DOUBLE';
export declare type IUpDoubleStates = {
    [prop in IUpDoubleStateIndex]: IUpDoubleState;
};
export interface IUpDoubleState extends IIconState {
    enter?(): IUpDoubleStateIndex;
    leave?(): IUpDoubleStateIndex;
}
export interface IUpDoubleOption extends IIconOption {
    active: IUpDoubleStateIndex;
}
export default class UpDoubleIcon extends Icon {
    protected active: IUpDoubleStateIndex;
    protected states: IUpDoubleStates;
    constructor(options: IUpDoubleOption);
    protected bindActionEvents(): void;
}
