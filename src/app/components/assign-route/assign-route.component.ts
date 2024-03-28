import { Component } from '@angular/core';
import { AssignRouteDto } from '../../model/assign-route-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assign-route',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './assign-route.component.html',
  styleUrl: './assign-route.component.css'
})
export class AssignRouteComponent {
  assignRouteDto: AssignRouteDto = new AssignRouteDto;
  message: string = "";
  errorMessage: string = "";

  constructor(private adminService: AdminService, private route:ActivatedRoute, private router:Router){}
  assignRouteFunc(){
    console.log(this.assignRouteDto);
    this.adminService.assignRoute(this.assignRouteDto).subscribe(
      {
        next:(data)=>{
          this.message = "Route added successfully";
        },
        error:(err)=>{
          this.errorMessage = err.data;
        }
      }
    )
  }
 

  
}
