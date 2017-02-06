import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     transform(value: any, args: string[]): any {

       let filter = args[0].toLocaleLowerCase();
       return filter ? value.filter(item=> item.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
  }

}
