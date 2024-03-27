import { Component } from '@angular/core';
import { Car } from '../../model/car';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchcabPipe } from '../../pipes/search-cab.pipe';


@Component({
  selector: 'app-display-all-cabs',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchcabPipe],
  templateUrl: './display-all-cabs.component.html',
  styleUrl: './display-all-cabs.component.css'
})
export class DisplayAllCabsComponent {
  query: string="";
  cabaccounts:Car[]=[];
  constructor(private adminService :AdminService,private router:Router){
   this.adminService.getAllCabAccount().subscribe(
    {
      next:(data)=>{
      this.cabaccounts=data;
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
  backtologin(){
    console.log("Back to login");
    this.router.navigateByUrl('/login');
  }
}
