import Icon, { IIcon, IIconOption, IIconState } from '../Icon';
export declare type UpDoubleStateIndex = 'UP' | 'DOUBLE';
export declare type UpDoubleStates = {
    [prop in UpDoubleStateIndex]: IIconState;
};
export interface IUpDoubleOption extends IIconOption {
    active: UpDoubleStateIndex;
    events: {
        [prop: string]: (icon: IUpDoubleIcon) => void;
    };
}
export interface IUpDoubleIcon extends IIcon {
    to(state: UpDoubleStateIndex): void;
}
export default class UpDoubleIcon extends Icon implements IUpDoubleIcon {
    protected active: UpDoubleStateIndex;
    protected states: UpDoubleStates;
    constructor(options: IUpDoubleOption);
}
