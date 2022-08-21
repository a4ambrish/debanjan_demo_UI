import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-all-addition-calculation',
  templateUrl: './all-addition-calculation.component.html',
  styleUrls: ['./all-addition-calculation.component.css']
})
export class AllAdditionCalculationComponent implements OnInit {
  calculations : Calculator[];
  constructor(private calculatorService :CalculatorService) { }

  ngOnInit(): void {

    this.calculatorService.retriveAllAdditionCalculations().subscribe((cal: Calculator[]) => {
      this.calculations = cal;
      console.log(this.calculations);
    });
    

  }

}
