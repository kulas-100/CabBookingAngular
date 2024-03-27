import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { QrCodeModule } from 'ng-qrcode';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink,RouterLinkActive, QrCodeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menu:string|null="true";
  isUserLogedIn:boolean=true;
  userImageUrl: string = "./assets/user-login.jpeg"
  driverImageUrl: string = "./assets/driver-login.jpeg"
  adminImageUrl: string = "./assets/admin-login.png"
  logoImageUrl: string = "./assets/fordlogo-removebg-preview.png"
  backgroundImageUrl: string = "/Users/rkn/Documents/JavaProject/Angular/my-app/src/assets/background.jpeg"
  
  constructor(private router: Router){
    this.menu = localStorage.getItem("menu");
  }

  showMenu(){
    if(localStorage.getItem("menu")=="false" )
      return false;
    else
      return true;
  }

  userLogout(){
    if(confirm("Are you sure you want to log out")){
      console.log("userLogout");
      localStorage.setItem("menu","true");
      localStorage.removeItem("userId");
      this.router.navigate(['/user-home']);
    }
  }

  adminLogout(){
    if(confirm("Are you sure you want to log out")){
      console.log("adminLogout");
      localStorage.setItem("menu","true");
      localStorage.removeItem("adminId");
      this.router.navigate(['/admin-home']);
    }
  }

  showNavBar(){
    if(localStorage.getItem("userId") == null){
      return false;
    }
    else{
      return true;
    }
  }

  showAdminNavBar(){
    if(localStorage.getItem("adminId") == null){
      return false;
    }
    else{
      return true;
    }
  }

  userLogin(){
    console.log("userLogin");
    localStorage.setItem("menu","false");
    this.menu="false";
  }
  driverLogin(){
    console.log("driverLogin");
    localStorage.setItem("menu","false");
    this.menu="false";
  }
  adminLogin(){
    console.log("driverLogin");
    localStorage.setItem("menu","false");
    this.menu="false";
  }
 }
