import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-slide-two',
    styleUrls: ['./slide-two.component.scss'],
    templateUrl: './slide-two.component.html'
})
export class SlideTwoComponent {}
