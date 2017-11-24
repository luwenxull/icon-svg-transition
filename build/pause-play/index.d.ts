import Icon, { IIcon, IIconOption, IIconState } from '../Icon';
export declare type PausePlayStateIndex = 'PLAY' | 'PAUSE';
export declare type PausePlayStates = {
    [prop in PausePlayStateIndex]: IIconState;
};
export interface IPausePlayOption extends IIconOption {
    active: PausePlayStateIndex;
    events?: {
        [prop: string]: (icon: IPausePlayIcon) => void;
    };
}
export interface IPausePlayIcon extends IIcon {
    to(state: PausePlayStateIndex): void;
}
export default class PausePlayIcon extends Icon {
    protected active: PausePlayStateIndex;
    protected states: PausePlayStates;
    constructor(options: IPausePlayOption);
}
