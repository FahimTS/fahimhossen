import { Component, Input } from '@angular/core';
import { Services } from '../interfaces/services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'] // Corrected "styleUrl" to "styleUrls"
})
export class ServiceComponent {
  @Input() serviceData: Services;
}

