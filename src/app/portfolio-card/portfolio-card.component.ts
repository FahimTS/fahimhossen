import { Component, Input } from '@angular/core';
import { Portfolio } from '../interfaces/portfolio';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss'
})
export class PortfolioCardComponent {
  @Input() portfolioData: Portfolio;
}
