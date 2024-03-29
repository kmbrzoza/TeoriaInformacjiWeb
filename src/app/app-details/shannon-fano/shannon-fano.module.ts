import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { ModalsModule } from 'src/app/shared/components/modals/modals.module';

import { AppDetailsSharedModule } from '../app-details-shared/app-details-shared.module';
import { ShannonFanoRoutingModule } from './shannon-fano-routing.module';
import { ShannonFanoComponent } from './shannon-fano.component';

@NgModule({
    declarations: [
        ShannonFanoComponent
    ],
    imports: [
        CommonModule,
        ShannonFanoRoutingModule,
        MaterialModule,
        AppDetailsSharedModule,
        ModalsModule
    ]
})
export class ShannonFanoModule { }
