import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { ModalsModule } from 'src/app/shared/components/modals/modals.module';

import { AppDetailsSharedModule } from '../app-details-shared/app-details-shared.module';
import { ShannonComponent } from '../shannon/shannon.component';
import { ShannonRoutingModule } from './shannon-routing.module';

@NgModule({
    declarations: [
        ShannonComponent
    ],
    imports: [
        CommonModule,
        ShannonRoutingModule,
        MaterialModule,
        AppDetailsSharedModule,
        ModalsModule
    ]
})
export class ShannonModule { }
