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
}
