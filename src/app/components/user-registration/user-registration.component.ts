import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { User } from '../../model/user';
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  
  newUserAccount: User = new User();


  message:string=" ";
  errorMessage:string=" ";
  
  constructor(private adminService:AdminService,private router:Router){}
  addUserAccount(){
    console.log(this.newUserAccount);
    this.adminService.addNewUser(this.newUserAccount)
    .subscribe(
      {
        next:(message)=>{
          console.log(message);
          this.message="User Account Added.";
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
