import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormRoutingModule } from './data-form-routing.module';
import { DataFormComponent } from './data-form.component';

@NgModule({
  imports: [
    CommonModule,
    DataFormRoutingModule
  ],
  declarations: [DataFormComponent]
})
export class DataFormModule { }
