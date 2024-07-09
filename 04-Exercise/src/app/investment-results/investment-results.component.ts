import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { type AnnualData } from './annual-data.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  annualData?: AnnualData[] = this.sharedService.getAnnualData;

  constructor(private sharedService: SharedService){
  }
}