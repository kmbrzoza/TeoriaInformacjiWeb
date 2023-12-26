import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AritmeticComponent } from './aritmetic.component';

const routes: Routes = [
    {
        path: '',
        component: AritmeticComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AritmeticRoutingModule { }
