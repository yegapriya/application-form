import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { Step1ComponentRoutingModule } from './step1/step1-routing.module';
import { step1Component } from "./step1/step1.component"; // Import the standalone component
import { Ststep4Component } from './ststep4/ststep4.component';
import { Step4RoutingModule } from "./ststep4/ststep4-routing.module";
import { Step3Component } from './step3/step3.component';
import { Step3ComponentRoutingModule } from './step3/step3-routing.module';
import { Step5RoutingModule } from './ststep5/ststep5-routing.module';
import { Step6RoutingModule } from './step6/step6-routing.module';
import {ApplicationRoutingModule} from "./apllication-routing.module"
import { LoginModule } from './login/login.module';
import { Step2ComponentRoutingModule } from './step2/step2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ApplicationRoutingModule
    //Step1ComponentRoutingModule,
    //Step4RoutingModule,
    //step1Component,
    //Step2ComponentRoutingModule,
    // Step3Component,
    // Step3ComponentRoutingModule,
    // Step5RoutingModule ,
    // Step6RoutingModule,
    // LoginModule,
    // ApplicationRoutingModule
    
  ],
  // Remove step1Component from declarations
  declarations: [
    Ststep4Component
  // Only declare Ststep4Component here
  ],
})
export class ApplicationFormModule {}


