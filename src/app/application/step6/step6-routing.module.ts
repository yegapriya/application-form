import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step6Component } from './step6.component';  // Ensure correct case

const routes: Routes = [
  { path: '', component: Step6Component }  // Use consistent case
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Step6RoutingModule {}