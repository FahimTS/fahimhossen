import { Component, Input } from '@angular/core';
import { Work } from '../interfaces/work';

@Component({
  selector: 'app-work-process',
  templateUrl: './work-process.component.html',
  styleUrl: './work-process.component.scss'
})
export class WorkProcessComponent {
  @Input() worksData: Work;
}
