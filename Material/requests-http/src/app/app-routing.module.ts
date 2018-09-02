import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cursos'},
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ID : 15327195632553583
// +100.00 BRL
// Processado
// Data de criação: 07/27/2018 16:26 BRT
// Método: Transferência Instantânea
// Moeda da transação: BRL
// Detalhes: 5429****7209
// Comentários: Uma vez processado,
// 2 - 4 dias úteis.
