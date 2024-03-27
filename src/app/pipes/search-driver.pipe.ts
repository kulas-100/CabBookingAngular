import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../model/driver';


@Pipe({
  name: 'searchdriver',
  standalone: true
})
export class SearchdriverPipe implements PipeTransform {
  transform(driveraccounts: Driver[], query: string): Driver[] {
    if (!driveraccounts|| !query) {
      return driveraccounts;
    }
    query = query.toLowerCase();



    return driveraccounts.filter(driveraccounts => {
      return (driveraccounts.id ?? '')||
        (driveraccounts.name ?? '').toLowerCase().includes(query)
   });
  }
}