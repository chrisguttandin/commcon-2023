import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-slide-thirty',
    standalone: true,
    templateUrl: './slide-thirty.component.html'
})
export class SlideThirtyComponent {}
