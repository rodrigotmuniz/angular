import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  estrelaCurtida = false;
  mudarEstrela() {
    this.estrelaCurtida = !this.estrelaCurtida;
  }

  constructor() { }

  ngOnInit() {
  }

}
