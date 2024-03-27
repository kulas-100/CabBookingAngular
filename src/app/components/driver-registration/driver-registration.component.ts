import { Component } from '@angular/core';
import { Driver } from '../../model/driver';
import { AdminService } from '../../services/admin.service';
import { CommonModule, formatNumber } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-driver-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './driver-registration.component.html',
  styleUrl: './driver-registration.component.css'
})
export class DriverRegistrationComponent {
 
  newDriverAccount: Driver= new Driver();


  message:string=" ";
  errorMessage:string=" ";
name: any;
driverId: any;
email: any;
password: any;
phoneNumber: any;
licenseNumber: any;
  
  constructor(private adminService:AdminService,private router:Router){}
  addDriverAccount(){
    console.log(this.newDriverAccount);
    this.adminService.addNewDriver(this.newDriverAccount)
    .subscribe(
      {
        next:(message)=>{
          console.log(message);
          this.message="Driver Account Added.";
          this.errorMessage="";
        },
        error:(err)=>{
          console.log(err);
          // this.errorMessage="Could't add Account";/
          this.errorMessage=err.error;
          this.message="";
        }
      }
    );
  }
  backtologin(){
    console.log("Back to login");
    this.router.navigateByUrl('/login');
  }



}