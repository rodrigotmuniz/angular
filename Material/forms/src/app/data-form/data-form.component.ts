import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { EstadoBr } from '../shared/models/estado';
import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';



@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoBr[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {
    this.dropdownService.getEstadosBr().subscribe(dados => console.log(dados));
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    // console.log('data: ngOnInit');
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });


  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', this.formulario.value)
        .subscribe(
          (resp: Response) => {
            console.log(resp);
            this.formulario.reset();
          },
          (error: any) => console.log('ERROR')
        );
    }
    else {
      this.verificarValidacoesForm(this.formulario);
    }
  }

  verificarValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificarValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmail() {
    let campoEmail: AbstractControl = this.formulario.get('email');
    if (campoEmail.errors) {
      if (campoEmail.getError('required')) {
        return 'Email obrigatorio';
      }
      if (campoEmail.getError('email')) {
        return 'Email invalido';
      }

    }
  }

  OnCepBlur() {
    // let cep = this.formulario.get('endereco.cep').value;
    // if (cep) {
    //   cep = cep.replace(/\D/g, '');
    //   const regExCepValido = /[0-9]{8}/;
    //   let cepValido = regExCepValido.test(cep);
    //   if (cepValido) {
    //     this.resetarEndereco();
    //     this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(resp => {
    //       this.popularEndereco(resp);
    //     })
    //   }
    // }
    const cep = this.formulario.get('endereco.cep').value;
    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep).subscribe(resp => {
        this.popularEndereco(resp);
      })
    }
    
  }

  popularEndereco(dados) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetarEndereco() {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
        numero: null
      }
    })
  }

  // ngOnDestroy() {
  //   console.log('data: ngOnDestroy');
  // }
  // ngOnChanges() {
  //   console.log('data: ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('data: ngDoCheck');
  // }
  // ngAfterViewInit() {
  //   console.log('data: ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('data: ngAfterViewChecked');
  // }
  // ngAfterContentInit() {
  //   console.log('data: ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('data: ngAfterContentChecked');
  // }



}
