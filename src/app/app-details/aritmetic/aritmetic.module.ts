import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

import { AppDetailsSharedModule } from '../app-details-shared/app-details-shared.module';
import { AritmeticComponent } from '../aritmetic/aritmetic.component';
import { AritmeticRoutingModule } from './aritmetic-routing.module';
import { AritmeticDetailsComponent } from './aritmetic-details/aritmetic-details.component';
import { SplitPipe } from './aritmetic-details/split.pipe';

@NgModule({
    declarations: [
        AritmeticComponent,
        AritmeticDetailsComponent,
        SplitPipe
    ],
    imports: [
        CommonModule,
        AritmeticRoutingModule,
        MaterialModule,
        AppDetailsSharedModule
    ]
})
export class AritmeticModule { }
