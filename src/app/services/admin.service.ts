import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { User } from '../model/user';
import { Driver } from '../model/driver';
import { Car } from '../model/car';
import { AdminLoginDto } from '../model/admin-login-dto';
import { AssignRouteDto } from '../model/assign-route-dto';
import { AssignDriverDto } from '../model/assign-driver-dto';


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
    return this.httpClient.get("http://localhost:8090/showCabs");
  }
  
  getAllTrips():Observable<any>{
    return this.httpClient.get('http://localhost:8090/drivertrips');
  }
  getAllBookings():Observable<any>{
    return this.httpClient.get('http://localhost:8090/customerbookings');
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
  assignRoute(assignRouteDto?: AssignRouteDto):Observable<any>{
    return this.httpClient.put("http://localhost:8090/assignRoute", assignRouteDto);
  }

  assignDriver(assignDriverDto?: AssignDriverDto):Observable<any>{
    return this.httpClient.put("http://localhost:8090/assignDriver", assignDriverDto);
  }

  leaveApprove(id?: number): any {
    return this.httpClient.put("http://localhost:8090/approveLeave/"+id,{});
  }
  leaveDisapprove(id?: number): any {
    return this.httpClient.put("http://localhost:8090/disapproveLeave/"+id,{});
  }
  getAllLeaves():any{
    return this.httpClient.get("http://localhost:8090/allLeaves");
  }


}
