import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TesteComponent,
    
  ],
  exports: [
    TesteComponent
  ]
})
export class TesteModule { }
