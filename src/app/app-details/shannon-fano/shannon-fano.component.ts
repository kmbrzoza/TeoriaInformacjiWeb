import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { CodingForm } from 'src/app/core/models/common.model';
import { SFNode, ShannonFanoResult } from 'src/app/core/models/shannon-fano.model';
import { CharCounterService } from 'src/app/core/services/char-counter.service';
import { CommonService } from 'src/app/core/services/common.service';
import { EntropiaService } from 'src/app/core/services/entropia.service';
import { ShannonFanoService } from 'src/app/core/services/shannon-fano.service';
import { InformationModalComponent } from 'src/app/shared/components/modals/information-modal/information-modal.component';

@Component({
    selector: 'ti-shannon-fano',
    templateUrl: './shannon-fano.component.html',
    styleUrls: ['./shannon-fano.component.scss']
})
export class ShannonFanoComponent {
    isEncoding$ = new BehaviorSubject<boolean>(false);

    result$ = new BehaviorSubject<ShannonFanoResult | undefined>(undefined)

    constructor(
        private _charCounter: CharCounterService,
        private _entropia: EntropiaService,
        private _shannonFano: ShannonFanoService,
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
            const shannonFanoResult = this._shannonFano.startAlgo(probabilityOfChars);
            const endTimeSF = new Date().getTime();

            let L = 0;
            shannonFanoResult.forEach((node: SFNode) => L += node.code.length * node.probability);

            const n = entropia / L;

            this.result$.next({
                charCounts: charCounts,
                probabilityOfChars: probabilityOfChars,
                result: shannonFanoResult,
                entropia: entropia,
                time: endTimeSF - startTimeSF,
                L: L,
                n: n,
                rozwleklosc: 1.0 - n,
                codeEfficienty: entropia / L * 100
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
