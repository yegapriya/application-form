import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step2Component } from './step2.component';

import { Step3Component } from '../step3/step3.component';

const routes: Routes = [
  { path: '', component: Step2Component },
 
  { path: 'step3', component: Step3Component }, // Route for the standalone component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Step2ComponentRoutingModule {}