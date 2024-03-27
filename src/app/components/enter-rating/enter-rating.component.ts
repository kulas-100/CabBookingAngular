import { Component, OnInit } from '@angular/core';
import { Rating } from '../../model/rating';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingDto } from '../../model/rating-dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddRatingDto } from '../../model/add-rating-dto';

@Component({
  selector: 'app-enter-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enter-rating.component.html',
  styleUrl: './enter-rating.component.css'
})
export class EnterRatingComponent{

  ratingDto: RatingDto = new RatingDto;
  newGiveRating: Rating = new Rating;
  message: string = "";
  errorMessage: string = "";
  postRating: AddRatingDto = new AddRatingDto;
  stars = [
    { value: 1, filled: false },
    { value: 2, filled: false },
    { value: 3, filled: false },
    { value: 4, filled: false },
    { value: 5, filled: false }
  ];


  constructor(private userService: UserService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit():void{
    this.route.queryParams.subscribe(params=>{
      this.ratingDto = JSON.parse(params['ratingData']);
    });
  }

  rate(starValue:number) {
    this.newGiveRating.point = starValue;
    this.stars.forEach(star => {
      star.filled = star.value <= starValue;
    });
  }

  addRating() {
    console.log(this.ratingDto);
    this.newGiveRating.userId = this.ratingDto.userId;
    this.newGiveRating.driverId = this.ratingDto.driverId;
    this.newGiveRating.booking = this.ratingDto.booking;
    this.postRating.bookingId = this.newGiveRating.booking?.id;
    this.postRating.rating = this.newGiveRating;
    this.userService.addNewRating(this.postRating)
      .subscribe(
        {
          next:(data) => {
            console.log(data);
            this.message = "Rating Added.";
            this.errorMessage = "";
          },
          error: (err) => {
            console.log(err);
            // this.errorMessage="Could't add Account";/
            if (err.status == "0")
              this.errorMessage = " Network error, please try again later."
            else
              this.errorMessage = err.error;
              this.message = "";
          }
        }
      );
  }

}
