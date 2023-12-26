import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShannonFanoComponent } from './shannon-fano.component';

const routes: Routes = [
    {
        path: '',
        component: ShannonFanoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShannonFanoRoutingModule { }
