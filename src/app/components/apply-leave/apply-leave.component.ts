import { Component } from '@angular/core';
import { Leave } from '../../model/leave';
import { DriverService } from '../../services/driver-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css'
})
export class ApplyLeaveComponent {
  leave:Leave=new Leave
  message:string=''
  errorMessage:string=''
PresentDate: any=Date.now;
date = new Date;


  constructor(private driverService:DriverService){}


  applyLeave(){
    console.log(this.leave)
    this.leave.status = "Applied";
    this.driverService.leaveApply(this.leave).subscribe(

      {
     next: (response:any)=>{
        console.log(response)
        this.message="Leave Applied"
        this.errorMessage=''
      },
     error:( error:any)=>{
        console.log(error)
        if(error.status=="0")
          this.errorMessage="Network error, please try again later."
        else
          this.errorMessage=error.error
        this.message=""
      }
    }
    )
  }
  
}
