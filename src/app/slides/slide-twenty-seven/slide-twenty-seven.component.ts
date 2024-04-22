import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'cco-slide-twenty-seven',
    standalone: true,
    templateUrl: './slide-twenty-seven.component.html'
})
export class SlideTwentySevenComponent {}
