import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugModule } from './form-debug/form-debug.module';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule,
    FormDebugModule
  ],
  exports: [
    FormDebugComponent
  ],
  declarations: []
})
export class SharedModule { }
