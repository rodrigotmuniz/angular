import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menorImpar'
})
export class MenorImparPipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    return value % 2 != 0 ? value -1 : value;
  }
  
}
