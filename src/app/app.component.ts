import { Component } from '@angular/core';
//import { User } from './user';
//import { EnrollmentService } from './enrollment.service';
import { Calculator } from './calculator';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = ['Angular', 'React', 'Vue'];
  //userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  calculatorModel = new Calculator();
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  constructor(private _calculatorService: CalculatorService) {

    this.calculatorModel.a= 500;
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
