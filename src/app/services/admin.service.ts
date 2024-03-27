import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { User } from '../model/user';
import { Driver } from '../model/driver';
import { Car } from '../model/car';
import { AdminLoginDto } from '../model/admin-login-dto';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  constructor(private httpClient:HttpClient) { }
  addNewUser(newUserAccount:User):Observable<any>{
    return this.httpClient.post("http://localhost:8090/user",newUserAccount);
  }
  addNewDriver(newDriverAccount:Driver):Observable<any>{
    return this.httpClient.post("http://localhost:8090/driver",newDriverAccount);
  }
  addNewCab(newCabAccount:Car):Observable<any>{
    return this.httpClient.post("http://localhost:8090/cab",newCabAccount);
  }

  getAllUserAccount():Observable<any> {
    return this.httpClient.get("http://localhost:8090/showUsers");
  }
  getAllDriverAccount():Observable<any>{
    return this.httpClient.get("http://localhost:8090/showDrivers");
  }
  getAllCabAccount():Observable<any>{
    return this.httpClient.get("http://localhost:8090/showCars");
  }
  
  getAllTrips():Observable<any>{
    return this.httpClient.get('http://localhost:8090/drivertrips');
  }
  getAllBookings():Observable<any>{
    return this.httpClient.get('http://localhost:8090/Trips');
  }
  gettripsByCustId(id?:string|null):Observable<any>{
    return this.httpClient.get("http://localhost:8080/Booking/"+id);
  }
  adminLogin(adminLoginDto?:AdminLoginDto):Observable<any>{
    return this.httpClient.post("http://localhost:8090/adminlogin", adminLoginDto);
  }
  // getCustomerBookings():Observable<any>{
  //   return this.httpClient.get("http://localhost:8080/Booking/");
  // }
  // getDriverTrips():Observable<any>{
  //   return this.httpClient.get("http://localhost:8080/drivertrips");
  // }


}
