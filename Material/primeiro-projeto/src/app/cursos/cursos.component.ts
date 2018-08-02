import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  nomePortal: string;
  cursos: string[];

  service: CursosService
  detalhes: CursoDetalheComponent
  
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursosService.getCursos();
  }
  
  ngOnInit() {
    
  }
  
}
