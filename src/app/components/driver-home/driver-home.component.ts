import { Component } from '@angular/core';
import { DriverService } from '../../services/driver-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver-home.component.html',
  styleUrl: './driver-home.component.css'
})
export class DriverHomeComponent {
  id: string | null = localStorage.getItem("driverId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;
  driverName: string = "";
  backgroundImageUrl: string = 'assets/background.jpeg';
  constructor(private driverService: DriverService,private route:ActivatedRoute,private router:Router) { 
  }
  ngOnInit(): void {
    console.log(this.numberId);
    this.driverService.getDriverName(this.numberId).subscribe(
      {
        next:(data:string)=>{
          this.driverName = data;
          console.log(data);
        }
      }
    )
  }

  showMenu(){
    if(localStorage.getItem("menu")=="false" )
      return true;
    else
      return false;
  }

  driverLogout(){
    console.log("driverLogout");
    localStorage.setItem("menu","true");
  }

  showDriverNavBar(){
    if(localStorage.getItem("driverId") == null){
      return true;
    }
    else{
      return false;
    }
  }
}
