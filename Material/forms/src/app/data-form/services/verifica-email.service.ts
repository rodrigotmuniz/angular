import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificaEmail(email: string) {
    return this.http.get('/assets/dados/verificarEmail.json').pipe(
      delay(2000),
      tap(console.log),
      map(obj => obj.listaEmails),
      tap(console.log),
      map((obj: { email: string }[] )=> obj.filter(e => e.email == email)),
      tap(console.log),
      map(obj => obj.length > 0),
      tap(console.log)
    );
  }

}
