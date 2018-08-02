import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito;

  objeto = {
    'glyphicon-star': this.meuFavorito,
    'glyphicon-star-empty': !this.meuFavorito
  }

  onClick() {
    this.meuFavorito = !this.meuFavorito
    this.objeto = {
      'glyphicon-star': this.meuFavorito,
      'glyphicon-star-empty': !this.meuFavorito
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
