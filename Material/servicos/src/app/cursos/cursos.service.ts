import { Injectable, EventEmitter } from "../../../node_modules/@angular/core";
import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService {

    adicaoCurso = new EventEmitter<string>();

    private _cursos = ['Angular 2', 'Java', 'Phonegap'];

    constructor(private _logService: LogService) {
        console.log('CursosService');
    }

    getCursos(): string[] {
        this._logService.consoleLog('Obtendo lista de cursos');
        return this._cursos;
    }

    addCurso(curso: string) {
        this._logService.consoleLog(`adicionado o curso: ${curso}`);
        this._cursos.push(curso);
        // this.adicaoCurso.emit(curso);
    }
} 

continuar na aula 43