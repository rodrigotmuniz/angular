import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: {id, nome, email};
  incricao: Subscription;

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
