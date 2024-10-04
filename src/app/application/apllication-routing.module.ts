import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';





@NgModule({
  imports: [RouterModule.forChild([
   // { path: '', component: LoginComponent },
   { path: 'form', loadChildren: () => import('./step1/step1-routing.module').then(m => m.Step1ComponentRoutingModule) },
    { path: 'step2', loadChildren: () => import('./step2/step2-routing.module').then(m => m.Step2ComponentRoutingModule) },
    { path: 'step3', loadChildren: () => import('./step3/step3-routing.module').then(m => m.Step3ComponentRoutingModule) },
    { path: 'step4', loadChildren: () => import('./ststep4/ststep4-routing.module').then(m => m.Step4RoutingModule) },
    { path: 'step5', loadChildren: () => import('./ststep5/ststep5-routing.module').then(m => m. Step5RoutingModule) },
    { path: 'step6', loadChildren: () => import('./step6/step6-routing.module').then(m => m.Step6RoutingModule) },

  ])],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {}