import { Component } from '@angular/core';
import { Rating } from '../../model/rating';
import { Router } from '@angular/router';
import { DriverService } from '../../services/driver-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver-rating.component.html',
  styleUrl: './driver-rating.component.css'
})
export class DriverRatingComponent {
  ratings: Rating[] = [];
  id: string | null = localStorage.getItem("driverId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;
  errorMessage: string = "";
  constructor(private driverService: DriverService, private router: Router) { }
  ngOnInit(){
    this.displayAllRatings();
  }
  displayAllRatings(){
    this.driverService.driverRatings(this.numberId).subscribe(
      {
        next:(data: any)=>{
          this.ratings = data;
          console.log(this.ratings);
        },
        error:(err: any)=>{
          this.errorMessage = err;
        }
      }
    )
  }
}
