import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormRoutingModule } from './data-form-routing.module';
import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataFormRoutingModule
  ],
  declarations: [DataFormComponent]
})
export class DataFormModule { }
