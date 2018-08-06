import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../login/auth.service';
import { AuthGuard } from '../../guards/auth.guard';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: Aluno;
  incricao: Subscription;

  editar() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router,
    private authGuard: AuthGuard
  ) { }

  ngOnInit() {
    // this.incricao = this.activatedRoute.params.subscribe(value => {
    //   this.aluno = this.alunosService.getAluno(value['id']);
    // });
    this.incricao = this.activatedRoute.data.subscribe((value: {aluno: Aluno}) => {
      this.aluno = value.aluno;
    })
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

}
