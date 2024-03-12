import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserLogin } from '../../model/user-login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userAccount: User = new User;
  loginDto: UserLogin = new UserLogin(null, null);
  errorMessage: string = "";

  constructor(private userService: UserService) { }
  userLogin(){
    this.userService.userLogin(this.loginDto).subscribe(
      {
        next:(data)=>{
          this.userAccount = data;
          console.log(this.userAccount);
        },
        error:(err)=>{
          this.errorMessage = err;
          console.log(this.errorMessage);
        }
      }
    )
  }
  

  

}
