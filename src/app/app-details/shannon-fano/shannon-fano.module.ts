import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { ModalsModule } from 'src/app/shared/components/modals/modals.module';

import { AppDetailsSharedModule } from '../app-details-shared/app-details-shared.module';
import { ShannonFanoDetailsComponent } from './shannon-fano-details/shannon-fano-details.component';
import { ShannonFanoRoutingModule } from './shannon-fano-routing.module';
import { ShannonFanoComponent } from './shannon-fano.component';

@NgModule({
    declarations: [
        ShannonFanoComponent,
        ShannonFanoDetailsComponent
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
