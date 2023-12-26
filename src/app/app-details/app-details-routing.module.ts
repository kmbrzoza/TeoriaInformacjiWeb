import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'shannon-fano',
                loadChildren: () => import('./shannon-fano/shannon-fano.module').then(m => m.ShannonFanoModule)
            },
            {
                path: 'aritmetic',
                loadChildren: () => import('./aritmetic/aritmetic.module').then(m => m.AritmeticModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppDetailsRoutingModule { }
