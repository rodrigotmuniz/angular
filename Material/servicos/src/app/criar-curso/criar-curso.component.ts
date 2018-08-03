import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  addCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.adicaoCurso.subscribe(curso => console.log(curso));
  }

}
