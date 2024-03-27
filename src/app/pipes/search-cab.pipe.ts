import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/car';


@Pipe({
  name: 'searchcab',
  standalone: true
})
export class SearchcabPipe implements PipeTransform {


  transform(cabaccounts: Car[], query:string): Car[] {
  if (!cabaccounts|| !query) {
      return cabaccounts;
    }
    query = query.toLowerCase();



    return cabaccounts.filter(cabaccounts => {
      return (cabaccounts.type ?? '').toLowerCase().includes(query) ||
        (cabaccounts.carNumber ?? '').toLowerCase().includes(query)
   });
  }
}