import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Booking } from '../../model/booking';
import { CommonModule, Time } from '@angular/common';
import { SortProductPipe } from '../../pipes/sort-product.pipe';

@Component({
  selector: 'app-cancel-booking',
  standalone: true,
  imports: [CommonModule, SortProductPipe],
  templateUrl: './cancel-booking.component.html',
  styleUrl: './cancel-booking.component.css'
})
export class CancelBookingComponent implements OnInit{

  bookings: Booking[] = [];
  upcomingBookings: Booking[] = [];
  id: string | null = localStorage.getItem("userId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;
  errorMessage: string = "";
  currentDate: Date = new Date();
  cancelStatus: string = "";

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(){
    this.displayAllBookings();
  }

  getCurrentTime(): Time {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
    };
  }

  displayAllBookings(){
    this.userService.listOfBookings(this.numberId).subscribe(
      {
        next:(data)=>{
          this.bookings = data;
          console.log(this.bookings);
          this.iterateBookings();
        },
        error:(err)=>{
          this.errorMessage = err;
        }
      }
    )
  }
  iterateBookings(): void {
    for (let booking of this.bookings) {
      if(booking?.bookingDate){
        const bookingDate: Date = new Date(booking.bookingDate);
        const currentTime: Time = this.getCurrentTime();
        if (bookingDate.toDateString() === this.currentDate.toDateString()){
          this.upcomingBookings.push(booking);
        }
      }
    }
  }

  cancelBooking(bookingId?: number){
    if(confirm("Are you sure you want to cancel your booking")){
      if(bookingId !== undefined){
        this.userService.deleteBookingById(bookingId, this.numberId).subscribe(
          {
            next:(data)=>{
              console.log(data);
              this.cancelStatus = "Success";
            },
            error:(err)=>{
              console.log(err);
              this.cancelStatus = "Fail";
            }
          }
        )
      }
    }
    window.location.reload()
  }
}
