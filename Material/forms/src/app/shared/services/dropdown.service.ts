import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from '../models/estado';
import { Cidade } from '../models/cidade';
import { map, tap, filter } from 'rxjs/operators';

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCidades(estadoId: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json').pipe(
      // tslint:disable-next-line:triple-equals
      map(v => v.filter((cidade: Cidade) => cidade.estado == estadoId))
    );
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' },
    ];
  }

  getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
    ];
  }

  getFrameworks() {
    return [
      { nome: 'angular', desc: 'Angular' },
      { nome: 'spring', desc: 'Spring' },
      { nome: 'hibernate', desc: 'Hibernate' }
    ];
  }


}
