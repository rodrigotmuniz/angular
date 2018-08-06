import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: {id, nome, email};
  incricao: Subscription;

  editar() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.incricao = this.activatedRoute.params.subscribe(value => {
      this.aluno = this.alunosService.getAluno(value['id']);
    })
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

}
