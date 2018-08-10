import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel, NgForm, FormGroup } from '../../../node_modules/@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

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
    console.log(form);
    console.log(nome);
    console.log(email);
  }

  OnCepBlur(cep: string, form) {
    console.log(form.value.endere);
    cep = cep.replace(/\D/g, '');
    const regExCepValido = /[0-9]{8}/;
    let cepValido = regExCepValido.test(cep);
    if (cepValido) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(resp => {
        this.popularEndereco(form, resp.json());
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


  constructor(private http: Http) { }

  ngOnInit() {
  }
  parei na aula 86

}
