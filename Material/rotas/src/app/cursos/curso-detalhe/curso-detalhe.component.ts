import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  
  id;
  inscricao: Subscription;
  curso: {
    id: number,
    nome: string
  };


  constructor(
    private _route: ActivatedRoute, 
    private router: Router,
    private cursoService: CursosService
  ) {
    // this.id = this._route.snapshot.params['id'];
    // console.log(this._route);
  }
  
  ngOnInit() {
    this.inscricao = this._route.params.subscribe(param => {
      this.id = param['id'];
      this.curso = this.cursoService.getCurso(this.id);
      if(!this.curso) {
        this.router.navigate(['/naoEncontrado']);
      }
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  
}
