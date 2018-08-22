import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  
  formulario: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }
  
  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    // console.log('data: ngOnInit');
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]]
    })
  }
  
  onSubmit() {
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', this.formulario.value)
    .subscribe(
      (resp: Response) => {
        console.log(resp);
        this.formulario.reset();
      }, 
      (error: any) => console.log('ERROR')
    );
  }
  
  resetar() {
    this.formulario.reset();
  }
  
  aplicaCssErro(campo) {
    console.log(campo)
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
  
  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  
  verificaEmail() {
    let campoEmail: AbstractControl = this.formulario.get('email');
    console.log(campoEmail);
    if (campoEmail.errors) {
      if (campoEmail.getError('required')) {
        return 'Email obrigatorio';
      }
      if (campoEmail.getError('email')) {
        return 'Email invalido';
      }
      
    }
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
