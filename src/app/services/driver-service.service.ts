import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leave } from '../model/leave';
import { DriverLoginDto } from '../model/driver-login-dto';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClient:HttpClient) { }
  leaveApply(leave:Leave):any{
   return this.httpClient.post("http://localhost:8090/leave",leave)
  }
  getByLeave(id:number):any{
    return this.httpClient.get("http://localhost:8090/leaveHistory"+id,{})
  }
  getDriverName(id:number):any{
    return this.httpClient.get("http://localhost:8090/driver/"+id, { responseType: 'text' })
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  };
  getBookings(id:number):any{
    return this.httpClient.get("http://localhost:8090/bookings/"+id);
  }
  driverLogin(driverLoginDto?:DriverLoginDto):any{
    return this.httpClient.post("http://localhost:8090/driver/login", driverLoginDto);
  }
  driverRatings(id:number):any{
    return this.httpClient.get("http://localhost:8090/ratings/"+id);
  }
}