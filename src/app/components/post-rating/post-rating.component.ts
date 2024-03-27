import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Booking } from '../../model/booking';
import { CommonModule, Time } from '@angular/common';
import { RatingDto } from '../../model/rating-dto';
import { SortProductPipe } from '../../pipes/sort-product.pipe';


@Component({
  selector: 'app-post-rating',
  standalone: true,
  imports: [CommonModule, SortProductPipe],
  templateUrl: './post-rating.component.html',
  styleUrl: './post-rating.component.css'
})
export class PostRatingComponent {

  bookings: Booking[] = [];
  completedBookings: Booking[] = [];
  ratingDto: RatingDto = new RatingDto;
  id: string | null = localStorage.getItem("userId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;
  errorMessage: string = "";
  view: 'upcoming' | 'completed' = 'upcoming';
  currentDate: Date = new Date();
  cancelStatus: string = "";

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(){
    this.displayAllBookings();
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
        if (bookingDate.toDateString() !== this.currentDate.toDateString() && booking.status === "Success" && booking.rating == null){
          this.completedBookings.push(booking);
        }
      }
    }
  }

  addRating(driverId?: number, booking?: Booking){
    this.ratingDto.userId = this.numberId;
    this.ratingDto.driverId = driverId != null ? +driverId : 0;
    this.ratingDto.booking = booking;
    console.log(this.ratingDto);
    this.router.navigate(['/enter-rating'], { queryParams: { ratingData: JSON.stringify(this.ratingDto) } });
  }
}
