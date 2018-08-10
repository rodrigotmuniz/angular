import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(),
    //   email: new FormControl()
    // });
    this.formulario = this.formBuilder.group({
      nome: [],
      email: []
    })
  }

}
