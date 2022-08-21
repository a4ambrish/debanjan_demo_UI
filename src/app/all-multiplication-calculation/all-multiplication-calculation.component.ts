import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-all-multiplication-calculation',
  templateUrl: './all-multiplication-calculation.component.html',
  styleUrls: ['./all-multiplication-calculation.component.css']
})
export class AllMultiplicationCalculationComponent implements OnInit {

  calculations : Calculator[];
  constructor(private calculatorService :CalculatorService) { }

  ngOnInit(): void {

    this.calculatorService.retriveAllMultiplicationCalculations().subscribe((cal: Calculator[]) => {
      this.calculations = cal;
      console.log(this.calculations);
    });
    

  }

}
