import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodingForm } from 'src/app/core/models/common.model';
import { ControlsOf } from 'src/main';

@Component({
    selector: 'ti-coding-form',
    templateUrl: './coding-form.component.html'
})
export class CodingFormComponent {
    @Input() isEncoding: boolean = false;

    @Output() encoded = new EventEmitter<CodingForm>();

    form: FormGroup<ControlsOf<CodingForm>>;

    constructor(
        private _fb: FormBuilder
    ) {
        this.form = this._fb.group<ControlsOf<CodingForm>>({
            value: this._fb.nonNullable.control('', [Validators.required, Validators.minLength(2)])
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.isEncoding.firstChange) {
            if (changes.isEncoding.currentValue) {
                this.form.disable();
            } else {
                this.form.enable();
            }
        }
    }

    encode(): void {
        if (this.form.valid) {
            const formValue = this.form.value as CodingForm;

            this.encoded.next(formValue);
        } else {
            this.form.markAllAsTouched();
        }
    }
}
