import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';
  mostrarMenu = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.mostrarMenu.subscribe(v => this.mostrarMenu = v);
  }


}
