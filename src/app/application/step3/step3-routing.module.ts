import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step3Component } from './step3.component';
import { Ststep4Component } from '../ststep4/ststep4.component';


const routes: Routes = [
  { path: '', component: Step3Component },
 
  { path: 'step4', component: Ststep4Component }, // Route for the standalone component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Step3ComponentRoutingModule {}