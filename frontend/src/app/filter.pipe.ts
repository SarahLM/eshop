import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, term: any): any {

     			if (term === undefined) return items;

       return items.filter(function(item){

       		item.color.toLowerCase().includes(term.toLowerCase());

       });
  }

}
