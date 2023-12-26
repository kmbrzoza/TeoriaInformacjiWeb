import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type InformationModalData = {
    title: string;
    description: string;
};

@Component({
    selector: 'ti-information-modal',
    templateUrl: './information-modal.component.html'
})
export class InformationModalComponent {
    title: string;
    description: string;

    constructor(
        private _dialogRef: MatDialogRef<InformationModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: InformationModalData,
    ) {
        this.title = this._data.title;
        this.description = this._data.description;
    }
}
