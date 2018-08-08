import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario = {
    nome: 'nome do usuario',
    email: 'email do usuario'
  }

  teste = "email.invalid && email.touched";

  bla(f) {
    console.log(f);
  }

  


  onSubmit(form, nome, email) {
    console.log(`Template modificado: ${form.dirty}`);
    console.log(form);
    console.log(nome);
    console.log(email);
  }

  // @ViewChild('f') f;

  constructor() { }

  ngOnInit() {
  }

}
