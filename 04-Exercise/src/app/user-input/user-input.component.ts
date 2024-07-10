import { Component, signal } from '@angular/core';
import { InvestmentService } from '../shared/shared.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // Use signals
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService){}
  
  onCalculateInvestment(){
    this.investmentService.calculateInvestmentResults({
      // The '+' before a string converts it to an integer
      initialInvestment: +this.initialInvestment(),
      duration: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.duration()
  })

    this.initialInvestment = signal('0');
    this.annualInvestment = signal('0');
    this.expectedReturn = signal('5');
    this.duration = signal('10');
  }

}
