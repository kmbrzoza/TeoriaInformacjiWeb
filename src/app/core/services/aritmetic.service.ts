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

    docode(charProbabilities: Record<string, number>, code: number, inputLength: number): string {
        const probabilities = this.getAritmeticCodeProbabilities(charProbabilities);

        let low = 0;
        let high = 1;
        let result = '';

        for (let _i = 0; _i < inputLength; _i++) {
            for (const symbol in probabilities) {
                let currentRange = high - low;
                const value = (code - low) / currentRange;

                if (probabilities[symbol][0] <= value && value < probabilities[symbol][1]) {
                    result += symbol;
                    high = low + currentRange * probabilities[symbol][1];
                    low = low + currentRange * probabilities[symbol][0];
                    break;
                }
            }
        }

        return result;
    }

    calculatePercentageOfCorrectDecodedValue(inputValue: string, decodedValue: string): number {
        let correctValues = 0;

        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i] === decodedValue[i]) {
                correctValues++;
            } else {
                break;
            }
        }

        return (correctValues / inputValue.length) * 100;
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
