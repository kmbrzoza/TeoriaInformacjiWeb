import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CharCounterService {
    countChars(text: string): Record<string, number> {
        const result = {} as Record<string, number>;

        for (let char of text) {
            if (!!result[char]) {
                result[char] += 1;
            } else {
                result[char] = 1
            }
        }

        return result;
    }

    countProbabilityOfChars(charCounts: Record<string, number>): Record<string, number> {
        let sumCount = 0;

        for (let key in charCounts) {
            sumCount += charCounts[key];
        }

        const result = {} as Record<string, number>;

        for (let key in charCounts) {
            result[key] = charCounts[key] / sumCount;
        }

        return result;
    }
}
