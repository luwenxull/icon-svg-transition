import Icon, { IIconOption, IIconStateSingle } from '../Icon';
export declare type IPausePlayStateIndex = 'PLAY' | 'PAUSE';
export declare type IPausePlayState = {
    [prop in IPausePlayStateIndex]: IIconStateSingle;
};
export interface IPausePlayOption extends IIconOption {
    active: IPausePlayStateIndex;
}
export default class PausePlayIcon extends Icon {
    protected active: IPausePlayStateIndex;
    protected state: IPausePlayState;
    constructor(options: IPausePlayOption);
}
