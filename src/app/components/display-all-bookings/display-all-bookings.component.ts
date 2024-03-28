import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Booking } from '../../model/booking';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-all-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-all-bookings.component.html',
  styleUrl: './display-all-bookings.component.css'
})
export class DisplayAllBookingsComponent {
  bookings:[Booking[]]=[[]];
  constructor(private adminService:AdminService,private router:Router){}
  ngOnInit(){
    this.displayAllBookings();
  }
  displayAllBookings() {
    this.adminService.getAllBookings().subscribe(
      {
        next:(data)=>{
          this.bookings = data;
          console.log(data);
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

}
