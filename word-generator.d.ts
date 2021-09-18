import GameSettings from './game-settings';
import GameState from './game-state';
import { SymbolConfig } from './models';
export default class WordGenerator {
    state: GameState;
    settings: GameSettings;
    displayWord: () => void;
    addGameModeOneWords(): void;
    addGameModeThreeWords(): void;
    addNewWord: (elementName: string, className: string, width?: number) => void;
    removeWords: () => void;
    removeGameModeThreeWords(): void;
    removeSingleWord: () => void;
    clearWordsQueueHead(): void;
    tetherToWord: (key: string) => void;
    tetherToSubsequentWord: (key: string) => void;
    tetherToFirstWord: (key: string) => void;
    setActiveWord: (key: string) => void;
    getActiveWord: (key: string) => {
        nextWordIndex?: number;
        activeWord?: HTMLElement;
    };
    startHighlight: (index: number, increaseCorrectCount?: boolean) => void;
    increaseScoreOnLastSymbol(index: number): void;
    searchHighlightConfig: (highlightConfig: SymbolConfig[], index: number) => number;
    isInList: (config: SymbolConfig, index: number, mainList?: boolean) => boolean;
    isInSecondaryList: (config: SymbolConfig[], index: number) => boolean;
    highlightWord: (highlightConfig: SymbolConfig, index: number) => void;
    getUpdatedWordElements(config: SymbolConfig, index: number): string;
    highlightStyleBuilder: (config: SymbolConfig) => string;
    getRandomWord: (index: number) => string;
}
