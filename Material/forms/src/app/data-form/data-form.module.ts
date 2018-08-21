import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataFormRoutingModule } from './data-form-routing.module';
import { DataFormComponent } from './data-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataFormRoutingModule,
    SharedModule
  ],
  declarations: [DataFormComponent]
})
export class DataFormModule { }
