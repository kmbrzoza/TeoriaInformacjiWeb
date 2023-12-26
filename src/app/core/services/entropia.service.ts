import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EntropiaService {
    calculateEntropia(probabilityOfChars: Record<string, number>): number {
        let result = 0;

        for (let key in probabilityOfChars) {
            result -= probabilityOfChars[key] * Math.log2(probabilityOfChars[key]);
        }

        return result;
    }
}
