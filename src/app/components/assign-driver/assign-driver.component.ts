import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AssignDriverDto } from '../../model/assign-driver-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assign-driver',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './assign-driver.component.html',
  styleUrl: './assign-driver.component.css'
})
export class AssignDriverComponent {
  assignDriverDto: AssignDriverDto = new AssignDriverDto;
  message: string = "";
  errorMessage: string = "";

  constructor(private adminService: AdminService, private route:ActivatedRoute, private router:Router){}
  assignDriverFunc(){
    this.adminService.assignDriver(this.assignDriverDto).subscribe(
      {
        next:(data)=>{
          this.message = "Driver added successfully";
        },
        error:(err)=>{
          this.errorMessage = err.data;
        }
      }
    )
  }

}
