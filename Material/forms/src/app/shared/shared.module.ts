import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugModule } from './form-debug/form-debug.module';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './services/dropdown.service';

@NgModule({
  imports: [
    CommonModule,
    FormDebugModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  declarations: [CampoControlErroComponent],
  providers: [DropdownService]
})
export class SharedModule { }
