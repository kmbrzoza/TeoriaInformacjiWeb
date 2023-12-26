import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { AritmeticResult } from 'src/app/core/models/aritmetic.model';
import { CodingForm } from 'src/app/core/models/common.model';
import { AritmeticService } from 'src/app/core/services/aritmetic.service';
import { CharCounterService } from 'src/app/core/services/char-counter.service';
import { CommonService } from 'src/app/core/services/common.service';
import { EntropiaService } from 'src/app/core/services/entropia.service';
import { InformationModalComponent } from 'src/app/shared/components/modals/information-modal/information-modal.component';

@Component({
    selector: 'ti-aritmetic',
    templateUrl: './aritmetic.component.html',
    styleUrls: ['./aritmetic.component.scss']
})
export class AritmeticComponent {
    result$ = new BehaviorSubject<AritmeticResult | undefined>(undefined)
    isEncoding$ = new BehaviorSubject<boolean>(false);

    constructor(
        private _charCounter: CharCounterService,
        private _entropia: EntropiaService,
        private _aritmetic: AritmeticService,
        private _dialog: MatDialog,
        private _commonService: CommonService
    ) { }

    onEncoded(form: CodingForm): void {
        const charCounts = this._charCounter.countChars(form.value);
        if (this._commonService.shouldDisplayModal(charCounts)) {
            this.displayModal();
        } else {
            const probabilityOfChars = this._charCounter.countProbabilityOfChars(charCounts);

            const entropia = this._entropia.calculateEntropia(probabilityOfChars);

            const startTimeAritmetic = new Date().getTime();
            const aritmeticValue = this._aritmetic.encode(probabilityOfChars, form.value);
            const endTimeAritmetic = new Date().getTime();

            this.result$.next({
                charCounts: charCounts,
                probabilityOfChars: probabilityOfChars,
                entropia: entropia,
                time: endTimeAritmetic - startTimeAritmetic,
                result: aritmeticValue
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
