import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentResults } from '../../investment-results';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestmentResultsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private sharedService: SharedService){}
  // Use signals
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');
  calculateInvestment(){
    this.sharedService.calculateAnnualData(
      // The '+' before a string converts it to an integer
      +this.initialInvestment(),
      +this.annualInvestment(),
      +this.expectedReturn(),
      +this.duration()
    )
    console.log(this.sharedService.getAnnualData);
  }
  onCalculate(){
    this.sharedService.setCalculated(true);
  }
}
