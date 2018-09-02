import { Component } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent {

  formulario: FormGroup;

  abstract submit();

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      this.verificarValidacoesForm(this.formulario);
      console.log(this.getCampo('termos'));
    }
  }

  verificarValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificarValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return !this.getCampo(campo).valid && this.getCampo(campo).touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': !this.getCampo(campo).valid && this.getCampo(campo).touched,
      'has-feedback': !this.getCampo(campo).valid && this.getCampo(campo).touched,
      'has-success': this.getCampo(campo).valid && this.getCampo(campo).touched
    };
  }

  getCampo(campo: string): AbstractControl {
    return this.formulario.get(campo);
  }


}
