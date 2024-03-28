import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  backgroundImageUrl: string = 'assets/background.jpeg';
  userName?: string = "";
  id: string | null = localStorage.getItem("userId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;
  constructor(private userService: UserService,private route:ActivatedRoute,private router:Router) { 
  }
  ngOnInit(): void {
    console.log(this.numberId);
    this.userService.getUserName(this.numberId).subscribe(
      {
        next:(data:string)=>{
          this.userName = data;
          console.log(data);
        },
        error:(err)=>{
          console.log(err);
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

  userLogout(){
    console.log("userLogout");
    localStorage.setItem("menu","true");
  }

  showNavBar(){
    if(localStorage.getItem("userId") == null){
      return true;
    }
    else{
      return false;
    }
  }
}
