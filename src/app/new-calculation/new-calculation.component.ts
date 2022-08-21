import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-new-calculation',
  templateUrl: './new-calculation.component.html',
  styleUrls: ['./new-calculation.component.css']
})
export class NewCalculationComponent implements OnInit {
  calculatorModel = new Calculator();
  submitted = false;
  errorMsg = '';
  constructor(private _calculatorService: CalculatorService) {
    this.calculatorModel.a= 500;
   }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.calculatorModel)
    this._calculatorService.submitNewCalculationRequest(this.calculatorModel)
      .subscribe(
        response => {console.log('Success!', response);
        this.errorMsg="Calculation result is : "+response;
      },
        error => this.errorMsg = error.statusText
      )
  }
}
