import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateFormComponent } from './template-form.component';
import { FormValidationDirective } from '../directives/form-validation.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TemplateFormRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TemplateFormComponent,
    FormValidationDirective
  ],
  providers: [
  ]
})
export class TemplateFormModule { }
 