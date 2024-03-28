import { Component } from '@angular/core';
import { Driver } from '../../model/driver';
import { DriverLoginDto } from '../../model/driver-login-dto';
import { DriverService } from '../../services/driver-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './driver-login.component.html',
  styleUrl: './driver-login.component.css'
})
export class DriverLoginComponent {
  driver: Driver = new Driver;
  driverLoginDto: DriverLoginDto = new DriverLoginDto;
  errorMessage: string = "";
  message?: string = "";
  driverId?: number = 0;
  constructor(private driverService: DriverService, private router: Router) { }
  login(){
    console.log(this.driverLoginDto);
    this.driverService.driverLogin(this.driverLoginDto).subscribe(
      {
        next:(data: any)=>{
          this.driver = data;
          console.log(this.driver);
          this.message = "Success";
          this.driverId = this.driver.id;
          console.log(this.driverId);
          localStorage.setItem("driverId",this.driverId as unknown as string);
          this.router.navigate(['/driver-home']);
        },
        error:(err: string)=>{
          this.errorMessage = err;
          console.log(this.errorMessage);
          this.errorMessage = "Login Failed";
        }
      }
    )
  } 

}
