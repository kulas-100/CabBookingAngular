import { Component } from '@angular/core';
import { Driver } from '../../model/driver';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchdriverPipe } from '../../pipes/search-driver.pipe';


@Component({
  selector: 'app-display-all-drivers',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchdriverPipe],
  templateUrl: './display-all-drivers.component.html',
  styleUrl: './display-all-drivers.component.css'
})
export class DisplayAllDriversComponent {
  query: string="";
driveraccounts:Driver[]=[];
  constructor(private adminService :AdminService,private router:Router){
   this.adminService.getAllDriverAccount().subscribe(
    {
      next:(data)=>{
      this.driveraccounts = data;
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
