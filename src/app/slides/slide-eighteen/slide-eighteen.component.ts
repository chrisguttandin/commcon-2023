import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'cco-slide-eighteen',
    standalone: true,
    styleUrls: ['./slide-eighteen.component.scss'],
    templateUrl: './slide-eighteen.component.html'
})
export class SlideEighteenComponent {}
