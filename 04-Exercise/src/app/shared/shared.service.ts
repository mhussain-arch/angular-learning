import { Injectable } from "@angular/core";
import { calculateInvestmentResults } from "../../investment-results";
import { AnnualData } from "../investment-results/annual-data.model";
@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private isCalculated = false;
    private annualData?: AnnualData[];
    setCalculated(isCalculated: boolean){
        this.isCalculated = isCalculated;
    }

    calculateAnnualData(initialInvestment:number, annualInvestment: number, expectedReturn:number, duration:number){
        this.annualData =  calculateInvestmentResults(initialInvestment, annualInvestment, expectedReturn, duration);
    }

    get getAnnualData(){
        return this.annualData;
    }

    get getCalculatedStatus(){
        return this.isCalculated;
    }
}