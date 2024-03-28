import { Component } from '@angular/core';
import { Booking } from '../../model/booking';
import { DriverService } from '../../services/driver-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver-bookings.component.html',
  styleUrl: './driver-bookings.component.css'
})
export class DriverBookingsComponent {
  bookings: Booking[] = [];
  id: string | null = localStorage.getItem("driverId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;
  errorMessage: string = "";
  constructor(private driverService: DriverService, private router: Router) { }
  ngOnInit(){
    this.displayAllBookings();
  }
  displayAllBookings(){
    this.driverService.getBookings(this.numberId).subscribe(
      {
        next:(data: any)=>{
          this.bookings = data;
          console.log(this.bookings);
        },
        error:(err: any)=>{
          this.errorMessage = err;
        }
      }
    )
  }

}
