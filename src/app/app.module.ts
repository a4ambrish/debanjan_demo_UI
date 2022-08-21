import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AllCalculationComponent } from './all-calculation/all-calculation.component';
import { RouterModule } from '@angular/router';
import { NewCalculationComponent } from './new-calculation/new-calculation.component';
import { AllAdditionCalculationComponent } from './all-addition-calculation/all-addition-calculation.component';
import { AllSubtractionCalculationComponent } from './all-subtraction-calculation/all-subtraction-calculation.component';
import { AllMultiplicationCalculationComponent } from './all-multiplication-calculation/all-multiplication-calculation.component';


@NgModule({
  declarations: [
    AppComponent,
    AllCalculationComponent,
    NewCalculationComponent,
    AllAdditionCalculationComponent,
    AllSubtractionCalculationComponent,
    AllMultiplicationCalculationComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'new-cal', component: NewCalculationComponent},
      {path: 'all-list', component: AllCalculationComponent},
      {path: 'all-add', component: AllAdditionCalculationComponent},
      {path: 'all-sub', component: AllSubtractionCalculationComponent},
      {path: 'all-mult', component: AllMultiplicationCalculationComponent},

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
