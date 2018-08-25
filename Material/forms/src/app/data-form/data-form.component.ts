import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EstadoBr } from '../shared/models/estado';
import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormValidations } from '../shared/form-validations';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  
  formulario: FormGroup;
  estados: Observable<EstadoBr[]>;
  cargos;
  tecnologias;
  newsletterOp;
  termos;
  frameworks = ['Angular', 'Reack', 'Spring', 'Hibernate'];
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }
  
  ngOnInit() {
    this.estados = this.dropdownService.getEstadosBr();
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
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      
      endereco: this.formBuilder.group({
        // cep: [null, Validators.required],
        cep: [null, [FormValidations.cepValidator, Validators.required]],
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
    
    
  }
  
  onSubmit() {
    let formCopy = Object.assign({}, this.formulario.value);
    formCopy.frameworks = formCopy.frameworks
    .map((v, i) => v ? this.frameworks[i] : null)
    .filter(v => v != null);
    console.log(this.formulario)
    
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', formCopy)
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
      console.log(this.formulario.get('termos'))
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
  
  msgErroEmail() {
    let campoEmail: AbstractControl = this.formulario.get('email');
    if (campoEmail.hasError('required')) { return 'Email obrigatorio'; }
    if (campoEmail.hasError('email')) { return 'Email invalido';  }
  }
  
  msgErroCep() {
    let campoCep: AbstractControl = this.formulario.get('endereco.cep');
    if (campoCep.hasError('required')) { return 'CEP obrigatorio';  }
    if (campoCep.hasError('cepInvalido')) { return 'CEP invalido'; }
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
    console.log(this.formulario.get('endereco.cep').valid)
    if (cep && cep !== '' && this.formulario.get('endereco.cep').valid) {
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
  
  
  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);
  }
  
  setarTecnologias() {
    this.formulario.get('tecnologias').setValue(['ruby', 'java']);
  }
  
  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nivel === obj2.nivel && obj1.desc === obj2.desc) : obj1 === obj2;
  }
  
  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckBox());
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
