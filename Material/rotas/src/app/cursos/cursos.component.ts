import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';
import { AlunosService } from '../alunos/alunos.service';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  cursos = [];
  pagina;
  inscricao: Subscription;
  
  proximaPagina() {
    this.router.navigate(['cursos'], {
      queryParams: {
        pagina: ++this.pagina
      }
    });
  }
  
  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) { }
  
  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    // this.pagina = this.activatedRoute.queryParams.value['pagina'];
    this.inscricao = this.activatedRoute.queryParams.subscribe(value => this.pagina = value['pagina']);
  }
  
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  
}
