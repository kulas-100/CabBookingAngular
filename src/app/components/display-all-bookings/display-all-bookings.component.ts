import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Booking } from '../../model/booking';


@Component({
  selector: 'app-display-all-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-all-bookings.component.html',
  styleUrl: './display-all-bookings.component.css'
})
export class DisplayAllBookingsComponent {
  Bookings:Booking[]=[];
  Booking: any;

}
