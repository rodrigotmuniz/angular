import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private usuario: Usuario = new Usuario();
  
  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
  
  constructor(
    private authService: AuthService
  ) { }
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
  }
  
  ngAfterViewChecked() {
    // setTimeout(() => {
    //   this.usuario.nome = 'a';
    //   this.usuario.senha = 'b';
    //   this.fazerLogin();
    // }, 500);
    
  }
  
}
