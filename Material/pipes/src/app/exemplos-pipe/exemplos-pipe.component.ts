import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipe',
  templateUrl: './exemplos-pipe.component.html',
  styleUrls: ['./exemplos-pipe.component.css']
})
export class ExemplosPipeComponent implements OnInit {
  
  nome = 'Rodrigo Thales Muniz';
  numero = '4.32';
  data = '2018-12-31';
  livros = ['Angular 2', 'Java'];
  teste = 'BRL';
  filtro;
  valorAsyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('valor assincrono');
    }, 2000);
  });
  valorAsyncObservable;
  numeros = [0, 1, 2, 3, 4, 5];
  
  adicionarElemento(inputValue) {
    this.livros.push(inputValue)
  }
  
  constructor() { }
  
  ngOnInit() {
    interval(1000).subscribe(n => this.valorAsyncObservable = 'Valor assincrono Observable');
  }
  
}
