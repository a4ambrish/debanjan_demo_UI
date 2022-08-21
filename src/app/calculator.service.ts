
import { Calculator } from "./calculator";

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class CalculatorService{
    _baseurl = 'http://localhost:8080/';
    constructor(private _http: HttpClient) { }
  
    submitNewCalculationRequest (calculator: Calculator) {
      let apiUrl = this._baseurl + 'v2/calculate/';
      apiUrl = apiUrl + calculator.myFlag;
      return this._http.post<any>(apiUrl, calculator)
        .pipe(catchError(this.errorHandler))
    }
  
    errorHandler(error: HttpErrorResponse) {
      return throwError(error)
    }
  
    private calculationsObserver = {
      next(quote) {
        console.log("quote.open=" +quote.open);
      }
    }
    retriveAllCalculations () {
      let apiUrl = this._baseurl +'v2/attempts';
      let calculations = this._http.get<Calculator[]>(apiUrl);
  
      of(calculations).subscribe(this.calculationsObserver);
  
  
      return calculations;
    }


    retriveAllAdditionCalculations () {
      let apiUrl = this._baseurl +'v2/attempts/operationwise/1';
      let calculations = this._http.get<Calculator[]>(apiUrl);
  
      of(calculations).subscribe(this.calculationsObserver);
  
  
      return calculations;
    }
    retriveAllSubtractionCalculations () {
      let apiUrl = this._baseurl +'v2/attempts/operationwise/2';
      let calculations = this._http.get<Calculator[]>(apiUrl);
  
      of(calculations).subscribe(this.calculationsObserver);
  
  
      return calculations;
    }
    retriveAllMultiplicationCalculations () {
      let apiUrl = this._baseurl +'v2/attempts/operationwise/3';
      let calculations = this._http.get<Calculator[]>(apiUrl);
  
      of(calculations).subscribe(this.calculationsObserver);
  
  
      return calculations;
    }

}