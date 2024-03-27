import { Component } from '@angular/core';
import { Ride } from '../../model/ride';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-all-trips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-all-trips.component.html',
  styleUrl: './display-all-trips.component.css'
})
export class DisplayAllTripsComponent {
  trips: Ride[] = [];
  constructor(private adminService :AdminService,private router:Router){
   this.adminService.getAllTrips().subscribe(
    {
      next:(data)=>{
      this.trips = data;
      console.log(data);
    },
      error:()=>{
        console.log(Error);
      },
      complete:()=>{
        console.log("server completed sending");
      }
    }
   )
  }
}
