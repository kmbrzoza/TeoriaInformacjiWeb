import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShannonComponent } from './shannon.component';

const routes: Routes = [
    {
        path: '',
        component: ShannonComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShannonRoutingModule { }
