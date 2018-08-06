import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  private alunos = [];
  aluno() {
    console.log('bla')
  }
  
  constructor(
    private alunosService: AlunosService
  ) { }
  
  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
    console.log('ngOnInit alunos')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy alunos')
  }
  
}
