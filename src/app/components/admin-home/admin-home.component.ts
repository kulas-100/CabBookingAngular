import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  backgroundImageUrl: string = 'assets/background.jpeg';
  showMenu(){
    if(localStorage.getItem("menu")=="false" )
      return true;
    else
      return false;
  }

  adminLogout(){
    console.log("userLogout");
    localStorage.setItem("menu","true");
  }

  showAdminNavBar(){
    if(localStorage.getItem("adminId") == null){
      return true;
    }
    else{
      return false;
    }
  }

}
