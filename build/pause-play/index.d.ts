import Icon, { IIconOption, IIconState } from '../Icon';
export declare type IPausePlayStateIndex = 'PLAY' | 'PAUSE';
export declare type IPausePlayStates = {
    [prop in IPausePlayStateIndex]: IPausePlayState;
};
export interface IPausePlayState extends IIconState {
    click(): IPausePlayStateIndex;
}
export interface IPausePlayOption extends IIconOption {
    active: IPausePlayStateIndex;
}
export default class PausePlayIcon extends Icon {
    protected active: IPausePlayStateIndex;
    protected states: IPausePlayStates;
    constructor(options: IPausePlayOption);
}
