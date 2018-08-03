import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-emitido',
  templateUrl: './curso-emitido.component.html',
  styleUrls: ['./curso-emitido.component.css']
})
export class CursoEmitidoComponent implements OnInit {

  curso;

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this._cursosService.adicaoCurso.subscribe(curso => this.curso = curso);
  }

}
