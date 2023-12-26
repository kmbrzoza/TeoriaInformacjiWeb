import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { CommonResult, Lookup } from 'src/app/core/models/common.model';

@Component({
    selector: 'ti-common-details',
    templateUrl: './common-details.component.html',
    styleUrls: ['./common-details.component.scss']
})
export class CommonDetailsComponent implements OnChanges {
    @Input() result: CommonResult;

    probabilityOfCharsData: Lookup[];

    legendPosition = LegendPosition;
    view: any = [undefined, 400]

    ngOnChanges(_changes: SimpleChanges): void {
        const probabilityOfChars: Lookup[] = [];
        for (let key in this.result.probabilityOfChars) {
            if (key === ' ') {
                probabilityOfChars.push({ name: 'Odstęp', value: this.result.probabilityOfChars[key] });
            } else if (key === '\n') {
                probabilityOfChars.push({ name: 'Nowa linia', value: this.result.probabilityOfChars[key] });
            } else {
                probabilityOfChars.push({ name: key, value: this.result.probabilityOfChars[key] });
            }
        }

        this.probabilityOfCharsData = probabilityOfChars;
    }
}
