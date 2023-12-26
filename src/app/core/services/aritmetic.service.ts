import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AritmeticService {
    encode(charProbabilities: Record<string, number>, text: string): number {
        const probabilities = this.getAritmeticCodeProbabilities(charProbabilities);

        let low = 0.0;
        let high = 1.0;

        for (let i = 0; i < text.length; i++) {
            let symbolRange = high - low;
            high = low + symbolRange * probabilities[text[i]][1];
            low = low + symbolRange * probabilities[text[i]][0];
        }

        return low;
    }

    private getAritmeticCodeProbabilities(charProbabilities: Record<string, number>): Record<string, number[]> {
        const aritmeticCodeProbabilities = {} as Record<string, number[]>;

        let tempSum = 0;

        for (let key in charProbabilities) {
            aritmeticCodeProbabilities[key] = [tempSum, tempSum + charProbabilities[key]];
            tempSum += charProbabilities[key];
        }

        return aritmeticCodeProbabilities;
    }
}
