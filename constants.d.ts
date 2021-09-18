import { ThemeTypes } from './enums';
import { KeyCombo, Theme } from './models';
export declare const KEY_COMBOS: Record<string, KeyCombo>;
export declare const NUMBERS_EN_TO_DZO: Record<number, string>;
export declare const NUMBERS_DZO_TO_EN: Record<string, string>;
export declare const WORD_GROUPS: Record<string, string[]>;
export declare const SPECIAL_KEY_IDS: string[];
export declare const GAME_MODE_SETTINGS: Record<string, {
    totalTime: string;
    wordAddTime: number;
    wordRemoveTime?: number;
}>;
export declare const GAME_MODES: string[];
export declare const THEME: Record<ThemeTypes, Theme>;
export declare const AVERAGE_SCORE = 35;
