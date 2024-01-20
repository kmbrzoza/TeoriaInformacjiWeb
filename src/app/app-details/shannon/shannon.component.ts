import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { CodingForm } from 'src/app/core/models/common.model';
import { ShannonResult } from 'src/app/core/models/shannon.model';
import { CharCounterService } from 'src/app/core/services/char-counter.service';
import { CommonService } from 'src/app/core/services/common.service';
import { EntropiaService } from 'src/app/core/services/entropia.service';
import { ShannonService } from 'src/app/core/services/shannon.service';
import { InformationModalComponent } from 'src/app/shared/components/modals/information-modal/information-modal.component';

@Component({
    selector: 'ti-shannon',
    templateUrl: './shannon.component.html',
    styleUrls: ['./shannon.component.scss']
})
export class ShannonComponent {
    isEncoding$ = new BehaviorSubject<boolean>(false);

    result$ = new BehaviorSubject<ShannonResult | undefined>(undefined)

    constructor(
        private _shannonService: ShannonService,
        private _charCounter: CharCounterService,
        private _entropia: EntropiaService,
        private _dialog: MatDialog,
        private _commonService: CommonService
    ) { }

    onEncoded(form: CodingForm): void {
        this.isEncoding$.next(true);

        const charCounts = this._charCounter.countChars(form.value);

        if (this._commonService.shouldDisplayModal(charCounts)) {
            this.displayModal();
        } else {
            const probabilityOfChars = this._charCounter.countProbabilityOfChars(charCounts);
            const entropia = this._entropia.calculateEntropia(probabilityOfChars);

            const startTimeSF = new Date().getTime();
            const shannonResult = this._shannonService.startAlgo(probabilityOfChars);
            const endTimeSF = new Date().getTime();

            const L = this._commonService.calculateL(shannonResult);
            const n = this._commonService.calculaten(entropia, L);
            const rozwleklosc = this._commonService.calculateRozwleklosc(n);
            const codeEfficienty = this._commonService.calculateCodeEfficienty(entropia, L);

            this.result$.next({
                charCounts: charCounts,
                probabilityOfChars: probabilityOfChars,
                result: shannonResult,
                entropia: entropia,
                time: endTimeSF - startTimeSF,
                L: L,
                n: n,
                rozwleklosc: rozwleklosc,
                codeEfficienty: codeEfficienty
            });
            this.isEncoding$.next(false);
        }
    }

    private displayModal(): void {
        this._dialog.open(InformationModalComponent, {
            width: '450px',
            data: {
                title: 'Informacja',
                description: 'Aby przeprowadzić poprawne kodowanie, należy wprowadzić co najmniej dwa różne znaki.'
            },
        }).afterClosed().subscribe(_ => {
            this.isEncoding$.next(false);
        });
    }
}
