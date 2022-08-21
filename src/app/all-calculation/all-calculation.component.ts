import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator';
import { CalculatorService } from '../calculator.service';
@Component({
  selector: 'app-all-calculation',
  templateUrl: './all-calculation.component.html',
  styleUrls: ['./all-calculation.component.css']
})
export class AllCalculationComponent implements OnInit {

  calculations : Calculator[];

  constructor(private calculatorService :CalculatorService) { }

  ngOnInit(): void {

    this.calculatorService.retriveAllCalculations().subscribe((cal: Calculator[]) => {
      this.calculations = cal;
      console.log(this.calculations);
    });
    

  }

}
