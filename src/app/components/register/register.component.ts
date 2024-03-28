import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(private router:Router){}


  registerNewUser(){
    console.log("User Registration Successful!");
    this.router.navigateByUrl('user-registration');
  }


  registerNewDriver(){
    console.log("Driver Registration Successful!");
    this.router.navigateByUrl('driver-registration');
  }


  registerNewCab(){
    console.log("Cab registration Successful!");
    this.router.navigateByUrl('cab-registration');
  }
}

