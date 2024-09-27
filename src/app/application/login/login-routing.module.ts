import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {step1Component} from '../step1/step1.component'

@NgModule({
    imports: [RouterModule.forChild([
         { path: '', component: LoginComponent },
        // { path: 'step1', component: step1Component },
    ])],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
