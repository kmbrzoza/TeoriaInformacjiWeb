import { Component, Input } from '@angular/core';

@Component({
    selector: 'ti-shannons-common-details',
    templateUrl: './shannons-common-details.component.html',
    styleUrls: ['./shannons-common-details.component.scss']
})
export class ShannonsCommonDetailsComponent {
    @Input() nodes: { symbol: string, code: string; }[];
    @Input() L: number;
    @Input() n: number;
    @Input() rozwleklosc: number;
    @Input() codeEfficienty: number;
}
