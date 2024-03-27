import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '../model/route';
import { Car } from '../model/car';



@Injectable({
  providedIn: 'root'
})
export class RouteService {
  addNewCab(cab: Car) {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient:HttpClient) { }

   addNewRoute(newRoute: Route): any {
    return this.httpClient.post("http://localhost:8090/locations", newRoute);
  }
  getAllRoute(): any {
    return this.httpClient.get('http://localhost:8090/location');
  }
  deleteRouteById(id?: number): any {
    return this.httpClient.delete("http://localhost:8090/location/" + id);
  }
  updateRoute(route?: Route): any {
    return this.httpClient.put("http://localhost:8090/updateRoute", route);
  }
  getRouteById(id?: string | null): any {
    return this.httpClient.get("http://localhost:8090/location/" + id);
  }
}