import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car } from '../../model/car';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cab-registration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cab-registration.component.html',
  styleUrl: './cab-registration.component.css'
})
export class CabRegistrationComponent {
  newCabAccount: Car = new Car();


  message:string="";
  errorMessage:string="";
  
  constructor(private adminService:AdminService,private router:Router){}
 
  addCabAccount(){
    console.log(this.newCabAccount);
    this.adminService.addNewCab(this.newCabAccount)
    .subscribe(
      {
        next:(message)=>{
          console.log(message);
          this.message="Cab Added Successfully!";
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

