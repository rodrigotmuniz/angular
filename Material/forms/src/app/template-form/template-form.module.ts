import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugModule } from '../form-debug/form-debug.module';
import { FormValidationDirective } from '../directives/form-validation.directive';


@NgModule({
  imports: [
    CommonModule,
    TemplateFormRoutingModule,
    FormsModule,
    FormDebugModule,
    
  ],
  declarations: [
    TemplateFormComponent,
    FormValidationDirective
  ],
  providers: [
  ]
})
export class TemplateFormModule { }
 