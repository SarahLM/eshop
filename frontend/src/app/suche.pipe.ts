import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Suche',
})



 export class SuchePipe implements PipeTransform {
 
  transform(items: any, term: any): any {
  if (term === undefined) return items;

   return items.filter(function(item){
           	return item.name.toLowerCase().includes(term.toLowerCase()); 


});
  }


}