import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchuserPipe } from '../../pipes/search-user.pipe';


@Component({
    selector: 'app-display-all-users',
    standalone: true,
    templateUrl: './display-all-users.component.html',
    styleUrl: './display-all-users.component.css',
    imports: [CommonModule, FormsModule, SearchuserPipe]
})
export class DisplayAllUsersComponent {
  query:string="";
  useraccounts:User[]=[];
  constructor(private adminService :AdminService,private router:Router){
   this.adminService.getAllUserAccount().subscribe(
    {
      next:(data: any)=>{
        this.useraccounts=data;
      console.log(data);
    },
      error:()=>{
        console.log(Error);
      },
      complete:()=>{
        console.log("server completed sending");
      }
    }
   )
  }


}
