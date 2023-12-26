import { Component, Input } from '@angular/core';
import { AritmeticResult } from 'src/app/core/models/aritmetic.model';

@Component({
    selector: 'ti-aritmetic-details',
    templateUrl: './aritmetic-details.component.html',
    styleUrls: ['./aritmetic-details.component.scss']
})
export class AritmeticDetailsComponent {
    @Input() details: AritmeticResult;
}
