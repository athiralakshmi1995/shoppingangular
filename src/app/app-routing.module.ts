import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { SampleComponent } from './sample/sample.component';
import { ProductentryComponent } from './productentry/productentry.component';



const routes: Routes = [{
  path:"home",
  component:CalculatorComponent
},{
  path:"test",
  component:SampleComponent
  },{
    path:"product",
    component:ProductentryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
