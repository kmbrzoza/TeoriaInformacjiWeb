import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    shouldDisplayModal(charCounts: Record<string, number>): boolean {
        let count = 0;
        for (let _key in charCounts) {
            count += 1;

            if (count >= 2) {
                return false;
            }
        }
        return true;
    }

    calculateL(values: { code: string, probability: number }[]): number {
        let L = 0;
        values.forEach((node) => L += node.code.length * node.probability);
        return L;
    }

    calculaten(entropia: number, L: number): number {
        return entropia / L;
    }

    calculateRozwleklosc(n: number): number {
        return 1.0 - n;
    }

    calculateCodeEfficienty(entropia: number, L: number): number {
        return entropia / L * 100;
    }
}
