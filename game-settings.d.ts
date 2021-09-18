import GameState from './game-state';
export default class GameSettings {
    private static instance;
    state: GameState;
    playButton: HTMLElement;
    pauseButton: HTMLElement;
    activeKeySurface: HTMLElement | undefined;
    static getInstance(): GameSettings;
    startTimer: () => void;
    stopTimerInterval: () => void;
    clearAllIntervals(): void;
    completeSession: () => void;
    calculateWpm: (increaseCorrectLettersCount?: boolean) => void;
    increaseScore: () => void;
    getDateDifferenceMins: () => number;
    updateKeyStyle(element: Element, style: {
        fill: string;
        height: number;
        width: number;
        x: number;
        y: number;
    }): void;
    blinkKey(): void;
    getActiveKey(): {
        shift: boolean;
        altShift: boolean;
        activeKey: string;
    };
    toggleWpmVisibility(status?: boolean): void;
    handlePause(): void;
    pauseWords(): void;
    resetGame(): void;
    removeWordRef: (wordRef: HTMLElement) => null;
}
