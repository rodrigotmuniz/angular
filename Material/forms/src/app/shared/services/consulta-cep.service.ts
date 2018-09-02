import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCep(cep: string) {
    if (cep) {
      cep = cep.replace(/\D/g, '');
      const regExCepValido = /[0-9]{8}/;
      const cepValido = regExCepValido.test(cep);
      if (cepValido) {
        return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
      }
    }
  }
}
