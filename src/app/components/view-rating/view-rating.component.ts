import { Component, OnInit } from '@angular/core';
import { Rating } from '../../model/rating';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Driver } from '../../model/driver';

@Component({
  selector: 'app-view-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-rating.component.html',
  styleUrl: './view-rating.component.css'
})
export class ViewRatingComponent implements OnInit{
  ratings: Rating[] = [];
  drivers: Driver[] = [];
  userId?:number;
  message: string = "";
  errorMessage: string = "";
 
 
  id: string | null = localStorage.getItem("userId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;
  constructor(private userService: UserService, private router: Router,private route:ActivatedRoute) {
    
  }

  ngOnInit():void{
    this.route.paramMap.subscribe(params=>{
      this.getAllRatings(this.numberId);
    });
  }
  getAllRatings(userId?:number):void{
    this.userService.getAllRating(userId).subscribe({
      next:(data)=>{
      this.ratings=data;
      console.log(data);
      this.getDriverNames(this.ratings);
     },
     error:(err)=>{
      console.log(err);
        this.message = "";
        this.errorMessage = "Coule not load ratings.";
     }
  });
  }
  updateRating(rating:Rating){
    console.log(rating);
    this.router.navigate(["/update-rating"], {queryParams: {ratingData:JSON.stringify(rating)}});
  }
  deleteRating(id?:number){
    console.log("delete id:"+id);
    if(confirm("Do you want to Delete Rating id:"+id))
    this.userService.deleteRating(id, this.numberId).subscribe({
      next:(resp:any) =>{
        console.log(resp);
        // delete route with id in local array
        this.ratings = this.ratings.filter((r) => r.driverId != id);
        this.message = "Deleted Rating with id:"+id;
        this.errorMessage = "";
      },
      error:(err:any) =>{
        console.log(err);
        this.message = "";
        this.errorMessage = "Could not Delete Rating.";
      }
    });
  }
  getDriverNames(ratings: Rating[]){
    for(let rating of ratings){
      this.userService.getDriverName(rating.id).subscribe(
        {
          next:(data)=>{
            this.drivers.push(data);
            console.log(data);
          },
          error:(err)=>{
            console.log(err);
          }
        }
      )
    }
  }
  getDriverById(driverId?: number): Driver | undefined {
    return this.drivers.find(driver => driver.id === driverId);
  }


}
