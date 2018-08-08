import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugModule } from '../form-debug/form-debug.module';
import { AddClassesValidationDirective } from '../directives/add-classes-validation.directive';
import { NgElseDirective } from '../directives/ng-else.directive';
import { NgValidationDirective } from '../directives/ng-validation.directive';


@NgModule({
  imports: [
    CommonModule,
    TemplateFormRoutingModule,
    FormsModule,
    FormDebugModule,
    
  ],
  declarations: [
    TemplateFormComponent,
    AddClassesValidationDirective,
    NgElseDirective,
    NgValidationDirective
  ],
  providers: [
  ]
})
export class TemplateFormModule { }
 