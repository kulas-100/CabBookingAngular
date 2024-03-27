import { Injectable } from '@angular/core';
import { Car } from '../model/car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CabService {
  httpClient: any;


  constructor() {
}


addNewCab(newCabAccount:Car):Observable<any>{
  return this.httpClient.post("http://localhost:8090/cab",newCabAccount);
}
}