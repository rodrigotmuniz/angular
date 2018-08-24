import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel, NgForm, FormGroup } from '../../../node_modules/@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario = {
    nome: 'nome do usuario',
    email: 'usuario@email.com'
  }
  cepMock = '31842070';

  onSubmit(form, nome, email) {
    console.log(`Template modificado: ${form.dirty}`);
    // console.log(form);
    // console.log(nome);
    // console.log(email);
    form.form.reset();
  }

  OnCepBlur(cep: string, form) {
    console.log(form.value.endere);
    cep = cep.replace(/\D/g, '');
    const regExCepValido = /[0-9]{8}/;
    let cepValido = regExCepValido.test(cep);
    if (cepValido) {
      this.cepService.consultaCep(cep).subscribe(resp => {
        this.popularEndereco(form, resp);
      })
    }

  }

  popularEndereco(form, endereco) {
    console.log(form)
    form.form.patchValue({
      endereco: {
        cep: endereco.cep,
        comp: endereco.complemento,
        rua: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado:endereco.uf
      }
    });
  }

  onCepClick(formGroup: FormGroup) {
    formGroup.patchValue({endereco: {cep: '31842070'}})
  }


  constructor(private http: HttpClient, private cepService: ConsultaCepService) { }

  ngOnInit() {
  //   console.log('template: ngOnInit');
  }
  // ngOnDestroy() {
  //   console.log('template: ngOnDestroy');
  // }
  // ngOnChanges() {
  //   console.log('template: ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('template: ngDoCheck');
  // }
  // ngAfterViewInit() {
  //   console.log('template: ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('template: ngAfterViewChecked');
  // }
  // ngAfterContentInit() {
  //   console.log('template: ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('template: ngAfterContentChecked');
  // }


}
