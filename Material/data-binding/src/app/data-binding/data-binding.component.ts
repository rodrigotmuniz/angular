import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  valorAtual = "";
  valorSalvo = "";
  isMouseOver = false;
  nome: string = 'abc';
  nomeDoCurso: string = 'Angular';
  valorInicial = 15;
  
  onKeyUp(input: HTMLInputElement ) {
    // this.valorAtual = input;
    console.log(input.value)
  }
  
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onChangeInput(nome: string) {
    this.nome = nome;
  }
  
  onMudouValor(evento) {
    console.log(evento)
  }
  
  constructor() { }
  
  ngOnInit() {
  }
  
  
  
}
