import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from 'src/app/material.module';
import { ErrorMessageModule } from 'src/app/shared/components/error-message/error-message.module';
import { SpinnerButtonModule } from 'src/app/shared/components/spinner-button/spinner-button.module';

import { CodingFormComponent } from './coding-form/coding-form.component';
import { CommonDetailsComponent } from './common-details/common-details.component';
import { ShannonsCommonDetailsComponent } from './shannons-common-details/shannons-common-details.component';

@NgModule({
    declarations: [
        CommonDetailsComponent,
        CodingFormComponent,
        ShannonsCommonDetailsComponent
    ],
    imports: [
        CommonModule,
        NgxChartsModule,
        MaterialModule,
        ErrorMessageModule,
        SpinnerButtonModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonDetailsComponent,
        CodingFormComponent,
        ShannonsCommonDetailsComponent
    ]
})
export class AppDetailsSharedModule { }
