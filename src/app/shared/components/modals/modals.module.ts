import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { InformationModalComponent } from './information-modal/information-modal.component';

@NgModule({
    declarations: [
        ConfirmationModalComponent,
        InformationModalComponent
    ],
    exports: [
        ConfirmationModalComponent,
        InformationModalComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class ModalsModule { }
