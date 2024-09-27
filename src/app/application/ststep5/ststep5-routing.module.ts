import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ststep5Component } from './ststep5.component';
import { Step6Component } from '../step6/step6.component';

const routes: Routes = [
  { path: '', component: Ststep5Component },
  { path: 'step6', component: Step6Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Step5RoutingModule {}
