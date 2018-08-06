import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;
  mostrarMenu = new EventEmitter;
  permissaoEditar = false;

  fazerLogin(usuario: Usuario) {
    if ( usuario.nome === 'a' && usuario.senha === 'b' ) {
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);
      this.mostrarMenu.emit(true);
    }
    else {
      this.usuarioAutenticado = false;
      this.mostrarMenu.emit(false);
    }

  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  constructor(
    private router: Router
  ) { }
}
