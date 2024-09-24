import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value:string): string{
    return value
    .toLowerCase()
    .split(' ')
    .map((word ,index)=>{
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
  }

}
