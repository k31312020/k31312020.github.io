import GameSettings from './game-settings';
import GameState from './game-state';
import WordGenerator from './word-generator';
export default class GameLoop {
    state: GameState;
    settings: GameSettings;
    wordGenerator: WordGenerator;
    gameLoop: () => void;
    setUpEvents(): void;
    setUpLoops(): void;
    onWindowFocus: () => void;
    onGameModeChange: () => void;
    switchGameMode: (index: number) => void;
    onWpmResetGame: () => void;
    onKeyboard: () => void;
    toggleKeyBoard: () => void;
    onPause: () => void;
    onKeyDown: () => void;
    updateKeyColor: (color: string, width: number, height: number, x: number, y: number) => void;
    onShift: (down: boolean) => void;
    onKeyUp: () => void;
    resetAllPressKeys: () => void;
    onEscape: () => void;
}
