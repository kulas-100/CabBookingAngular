import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserLogin } from '../model/user-login';
import { LocationDto } from '../model/location-dto';
import { SelectionDto } from '../model/selection-dto';
import { User } from '../model/user';
import { BookingDto } from '../model/booking-dto';
import { PaymentDto } from '../model/payment-dto';
import { Rating } from '../model/rating';
import { AddRatingDto } from '../model/add-rating-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  userLogin(loginDto: UserLogin): Observable<any> {
    return this.httpClient.post("http://localhost:8090/account/login", loginDto);
  }

  listOfCabs(locationDto: LocationDto): Observable<any>{
    return this.httpClient.post("http://localhost:8090/cabs", locationDto);
  }

  listOfBookings(userId: number): Observable<any>{
    return this.httpClient.get("http://localhost:8090/bookings/id/"+userId);
  }

  deleteBookingById(bookingId: number, userId: number):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/bookings/"+bookingId+ "/"+userId);
  }

  selectCab(selectionDto: SelectionDto): Observable<any>{
    return this.httpClient.post("http://localhost:8090/selectCab", selectionDto);
  }

  makePayment(paymentDto: PaymentDto): Observable<any> {
    return this.httpClient.post("http://localhost:8090/payment/makePayment", paymentDto);
  }
  bookCab(bookingDto:BookingDto):Observable<any>{
    return this.httpClient.post("http://localhost:8090/bookCab",bookingDto);
  }
  addNewRating(newRating: AddRatingDto): Observable<any> {
    return this.httpClient.post("http://localhost:8090/rating", newRating);
  }
  getAllRating(userId?:number): Observable<any> {
    return this.httpClient.get('http://localhost:8090/rating/user/'+userId);
  }

  deleteRating(ratingId?:number, customerId?:number) : Observable<any>{
    return this.httpClient.delete("http://localhost:8090/rating/"+ratingId+"/"+customerId);
  }

  updateRating(rating?: Rating):Observable<any>{
    return this.httpClient.put("http://localhost:8090/updaterating", rating);
  }

  getDriverName(ratingId?: number):Observable<any>{
    return this.httpClient.get("http://localhost:8090/drivername/"+ratingId);
  }
  getUserName(userId?: number):Observable<any>{
    return this.httpClient.get("http://localhost:8090/userName/"+userId, { responseType: 'text' })
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
