import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step1.component';

import { Step2Component } from '../step2/step2.component';

const routes: Routes = [
  { path: '', component: Step1Component },
 
  { path: 'step2', component: Step2Component }, // Route for the standalone component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Step1ComponentRoutingModule {}
