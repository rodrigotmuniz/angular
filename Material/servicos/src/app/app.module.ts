import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosModule } from './cursos/cursos.module';
import { CursoEmitidoComponent } from './curso-emitido/curso-emitido.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CriarCursoComponent,
    CursoEmitidoComponent
  ], 
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [
    CursosService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
