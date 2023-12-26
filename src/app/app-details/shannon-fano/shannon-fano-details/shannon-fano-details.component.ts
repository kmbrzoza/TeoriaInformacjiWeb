import { Component, Input } from '@angular/core';
import { ShannonFanoResult } from 'src/app/core/models/shannon-fano.model';

@Component({
    selector: 'ti-shannon-fano-details',
    templateUrl: './shannon-fano-details.component.html',
    styleUrls: ['./shannon-fano-details.component.scss']
})
export class ShannonFanoDetailsComponent {
    @Input() details: ShannonFanoResult;
}
