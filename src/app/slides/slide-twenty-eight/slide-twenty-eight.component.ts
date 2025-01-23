import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'cco-slide-twenty-eight',
    templateUrl: './slide-twenty-eight.component.html'
})
export class SlideTwentyEightComponent {}
