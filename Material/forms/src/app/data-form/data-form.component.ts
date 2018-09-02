import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { FormControl, FormBuilder, Validators, AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable, empty } from 'rxjs';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';


import { EstadoBr } from '../shared/models/estado';
import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormValidations } from '../shared/services/form-validations';
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidade';



@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {

  // estados: Observable<EstadoBr[]>;
  estados: EstadoBr[];
  cidades: Cidade[];
  cargos;
  tecnologias;
  newsletterOp;
  termos;
  frameworks = ['Angular', 'Reack', 'Spring', 'Hibernate'];
  emailValidTouched = false;
  emailInvalidTouched = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) {
    super();
  }

  ngOnInit() {
    // this.estados = this.dropdownService.getEstadosBr();
    this.dropdownService.getEstadosBr().subscribe(estados => this.estados = estados);
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();

    // this.frameworks = this.dropdownService.getFrameworks();
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    // console.log('data: ngOnInit');
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologias: null,
      newsletter: 'n',
      termos: [null, Validators.requiredTrue],
      frameworks: this.buildFrameworks()
    });

    this.getCampo('endereco.cep').statusChanges.pipe(
      tap(status => console.log(status)),
      distinctUntilChanged(),
      switchMap(status => status === 'VALID' ? this.cepService.consultaCep(this.getCampo('endereco.cep').value) : empty())
    ).subscribe(resp => this.popularEndereco(resp));

    this.getCampo('endereco.estado').valueChanges.pipe(
      map(estadoSigla => this.estados.filter(estado => estado.sigla === estadoSigla)),
      map((estados: EstadoBr[]) => estados && estados.length > 0 ? estados[0].id : empty()),
      switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId))
    ).subscribe(cidades => this.cidades = cidades);
  }

  submit() {
    const formCopy = Object.assign({}, this.formulario.value);
    formCopy.frameworks = formCopy.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter(v => v != null);
    console.log(this.formulario);

    this.http.post('https://httpbin.org/post', formCopy)
      .subscribe(
        (resp: Response) => {
          console.log(resp);
          this.formulario.reset();
        },
        (error: any) => console.log('ERROR')
      );
  }








  mgsErroEmail(formControlName: string) {
    const campoEmail: AbstractControl = this.getCampo(formControlName);
    if (campoEmail.errors) {
      if (campoEmail.getError('required')) { return 'Email obrigatorio'; }
      if (campoEmail.getError('email')) { return 'Email invalido'; }
      if (campoEmail.getError('notEqualsTo')) { return 'Emails não correspondem'; }
      if (campoEmail.getError('emailExistente')) { return 'Emails existente'; }
    }
    if (campoEmail.status === 'PENDING') { return 'Verificando Email'; }
    if (campoEmail.status === 'VALID') { return 'Email Válido'; }
  }

  msgErroCep() {
    const campoCep: AbstractControl = this.getCampo('endereco.cep');
    if (campoCep.hasError('required')) { return 'CEP obrigatorio'; }
    if (campoCep.hasError('cepInvalido')) { return 'CEP invalido'; }
  }

  OnCepBlur() {
    // let cep = this.getCampo('endereco.cep').value;
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


    if (this.getCampo('endereco.cep').valid) {
      const cep = this.getCampo('endereco.cep').value;
      this.cepService.consultaCep(cep).subscribe(resp => {
        this.popularEndereco(resp);
      });
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
    });
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
    });
  }


  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.getCampo('cargo').setValue(cargo);
  }

  setarTecnologias() {
    this.getCampo('tecnologias').setValue(['ruby', 'java']);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nivel === obj2.nivel && obj1.desc === obj2.desc) : obj1 === obj2;
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckBox(1));
  }

  msgErrorCep() {
    const cepControl = this.getCampo('endereco.cep');
    if (cepControl.hasError('required')) { return 'CEP é obrigatório'; }
    if (cepControl.hasError('cepInvalido')) { return 'CEP inválido'; }
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificaEmail(formControl.value).pipe(
      map(res => res ? { emailExistente: true } : null)
    );
  }

  getCidades(idEstado: number) {
    this.dropdownService.getCidades(idEstado).subscribe();
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
  // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterContentChecked() {
  //   console.log('data: ngAfterContentChecked');
  //   console.log(this.formulario);
  // }


}
