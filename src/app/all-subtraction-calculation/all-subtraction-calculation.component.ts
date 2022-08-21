import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-all-subtraction-calculation',
  templateUrl: './all-subtraction-calculation.component.html',
  styleUrls: ['./all-subtraction-calculation.component.css']
})
export class AllSubtractionCalculationComponent implements OnInit {

  calculations : Calculator[];
  constructor(private calculatorService :CalculatorService) { }

  ngOnInit(): void {

    this.calculatorService.retriveAllSubtractionCalculations().subscribe((cal: Calculator[]) => {
      this.calculations = cal;
      console.log(this.calculations);
    });
    

  }
}
