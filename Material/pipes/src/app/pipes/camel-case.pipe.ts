import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    let values: string[] = value.split(' ');
    let result = '';
    
    for(let v of values) {
      result += this.capitalize(v) + ' ';
    }
    return result;
  }

  capitalize(v: string): string {
    return v.substr(0, 1).toUpperCase() + v.substr(1).toLowerCase();
  }
  
}
