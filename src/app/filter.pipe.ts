import { Pipe, PipeTransform } from '@angular/core';
import { Provider } from './model/provider';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Provider[], searchText: string): Provider[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) || it.rating === Number(searchText) || it.lowestPrice===Number(searchText);
    });
   }
  }

