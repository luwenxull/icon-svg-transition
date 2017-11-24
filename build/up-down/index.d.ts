import Icon, { IIcon, IIconOption, IIconState } from '../Icon';
export declare type UpDownStateIndex = 'UP' | 'DOWN';
export declare type UpDownStates = {
    [prop in UpDownStateIndex]: IIconState;
};
export interface IUpDoubleOption extends IIconOption {
    active: UpDownStateIndex;
    events: {
        [prop: string]: (icon: IUpDoubleIcon) => void;
    };
}
export interface IUpDoubleIcon extends IIcon {
    to(state: UpDownStateIndex): void;
}
export default class UpDoubleIcon extends Icon implements IUpDoubleIcon {
    protected active: UpDownStateIndex;
    protected states: UpDownStates;
    constructor(options: IUpDoubleOption);
}
