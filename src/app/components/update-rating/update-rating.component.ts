import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating } from '../../model/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-rating',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-rating.component.html',
  styleUrl: './update-rating.component.css'
})
export class UpdateRatingComponent implements OnInit{
  constructor(private userService: UserService, private route:ActivatedRoute, private router:Router){}
  rating: Rating = new Rating;
  message: string = "";
  errorMessage: string = "";
  ngOnInit():void{
    this.route.queryParams.subscribe(params=>{
      this.rating = JSON.parse(params['ratingData']);
    }
  )
  }
  updateRating(){
    this.userService.updateRating(this.rating).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message = "Success";
        },
        error:(err)=>{
          console.log(err);
          this.errorMessage = "Fail";
        }
      }
    )
  }

}
