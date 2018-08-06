import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosRoutingModule } from './cursos/cursos-routing.module';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  { path: 'cursos', loadChildren: '../app/cursos/cursos.module#CursosModule' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent } ,
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
