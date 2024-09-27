import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ststep4Component } from './ststep4.component';


import { Ststep5Component } from '../ststep5/ststep5.component';

const routes: Routes = [
  
  { path: '', component: Ststep4Component },
  { path: 'step5', component: Ststep5Component } // Corrected the path
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Step4RoutingModule {}
