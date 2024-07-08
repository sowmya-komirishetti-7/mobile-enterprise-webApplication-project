import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(productlist:any, searchText:any): any {
    if(searchText == null) return productlist;

    return productlist.filter(function(search: { pName: string; }){
      return search.pName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  }


