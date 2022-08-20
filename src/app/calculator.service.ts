
import { Calculator } from "./calculator";

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class CalculatorService{
    _url = 'http://10.0.4.2:8080/v2/calculate/';
    constructor(private _http: HttpClient) { }
  
    submitNewCalculationRequest (calculator: Calculator) {
      this._url = 'http://10.0.4.2:8080/v2/calculate/';
      this._url = this._url + calculator.myFlag;
      return this._http.post<any>(this._url, calculator)
        .pipe(catchError(this.errorHandler))
    }
  
    errorHandler(error: HttpErrorResponse) {
      return throwError(error)
    }

}