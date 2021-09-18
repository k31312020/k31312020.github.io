export declare function getRandomNumber(limit: number, isIndex?: boolean): number;
export declare function wordAnimationEnded(word: HTMLSpanElement): boolean;
export declare function sessionCompleteMessage(score: number): string;
export declare function numInDzo(number: number): string;
export declare function getDzoTimeInEnglish(time: string, separator?: string): {
    minutes: number;
    seconds: number;
};
export declare function countdownDzoTime(time: string, separator?: string): Promise<string>;
export declare function nothing(): void;
