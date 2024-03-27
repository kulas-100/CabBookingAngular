import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';


@Pipe({
  name: 'searchuser',
  standalone: true
})
export class SearchuserPipe implements PipeTransform {
   transform(useraccounts: User[], query: string): User[] {
    if (!useraccounts || !query) {
      return useraccounts;
    }
    query = query.toLowerCase();



    return useraccounts.filter(useraccounts => {
      return (useraccounts.cdsId ?? '').toLowerCase().includes(query) ||
        (useraccounts.name ?? '').toLowerCase().includes(query)
   });
  }
}