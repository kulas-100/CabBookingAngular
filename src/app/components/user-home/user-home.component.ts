import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  userLogout(){
    console.log("userLogout");
    localStorage.setItem("menu","true");
  }
}
