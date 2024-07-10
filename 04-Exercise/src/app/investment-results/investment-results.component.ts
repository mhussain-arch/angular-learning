import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../shared/shared.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  // Same as creating a service constructor
  private investmentService = inject(InvestmentService);
  
  results = computed(() => this.investmentService.resultData());
}