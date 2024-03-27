import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserLogin } from '../../model/user-login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userAccount: User = new User;
  loginDto: UserLogin = new UserLogin;
  errorMessage: string = "";
  message?: string = "";
  userId?: number = 0;

  constructor(private userService: UserService, private router: Router) { }
  userLogin(){
    this.userService.userLogin(this.loginDto).subscribe(
      {
        next:(data)=>{
          this.userAccount = data;
          console.log(this.userAccount);
          this.message = "Success";
          this.userId = this.userAccount.id;
          localStorage.setItem("userId",this.userId as unknown as string);
          this.router.navigate(['/user-home']);
        },
        error:(err)=>{
          this.errorMessage = err;
          console.log(this.errorMessage);
          this.errorMessage = "Login Failed";
        }
      }
    )
  }  
}
