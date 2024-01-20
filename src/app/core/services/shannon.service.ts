import { Injectable } from '@angular/core';

import { SNode } from '../models/shannon.model';

@Injectable({
    providedIn: 'root'
})
export class ShannonService {
    startAlgo(charProbabilities: Record<string, number>): SNode[] {
        let result: SNode[] = [];

        for (let key in charProbabilities) {
            result.push({
                symbol: key,
                probability: charProbabilities[key],
                code: '',
                LS: this.getLS(charProbabilities[key])
            });
        }

        result.sort((a: SNode, b: SNode) => b.probability - a.probability);

        let Pxi = 0;
        for (let node of result) {
            node.code = this.getBinaryFractionalPart(Pxi, node.LS);
            Pxi += node.probability;
        }

        return result;
    }

    private getLS(probability: number): number {
        return Math.ceil(-Math.log2(probability));
    }

    private getBinaryFractionalPart(value: number, maxIterations: number): string {
        if (value < 0) {
            throw Error('Cannod get binary value of negative number');
        }

        const integerPartBinary = Math.floor(value).toString(2);

        let fractionalPartBinary = '';
        let fractionalPart = value - Math.floor(value);

        let iteration = 1;
        while (iteration <= maxIterations) {
            fractionalPart *= 2;
            fractionalPartBinary += Math.floor(fractionalPart).toString();
            fractionalPart = fractionalPart - Math.floor(fractionalPart);

            iteration += 1;
        }

        if (fractionalPartBinary === '') {
            return integerPartBinary;
        } else {
            return fractionalPartBinary
        }
    }
}
