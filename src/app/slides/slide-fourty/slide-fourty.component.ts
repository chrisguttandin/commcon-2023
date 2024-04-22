import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-slide-fourty',
    standalone: true,
    templateUrl: './slide-fourty.component.html'
})
export class SlideFourtyComponent {}
