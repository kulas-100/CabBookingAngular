import { Component } from '@angular/core';
import { Leave } from '../../model/leave';
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-decide-leave',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './decide-leave.component.html',
  styleUrl: './decide-leave.component.css'
})
export class DecideLeaveComponent {


  leavelist:Leave []=[];
  message: string = "";
  errorMessage: string = "";


  constructor(private adminService:AdminService){
    this.adminService.getAllLeaves().subscribe({
      next:(data:any)=>{
        console.log(data)
        // this.message="Leave Disapproved"
        this.leavelist=data;
      },
      error: (err:any) => {
        console.log(err);
        this.errorMessage = "Could't Load Accounts";
        this.message = "";
      },
      complete: () => {
        console.log("Server completed sending data.");


      }
    })
  }


  // disapprove(leaveId?:number) {
  //   this.adminService.leaveDisapprove(leaveId).subscribe({
  //     next:(data:any)=>{
  //       console.log(data)
  //       this.message="Leave Disapproved"
  //       this.errorMessage=""
  //     },
  //     error:(error:any)=>{
  //       console.log(error)
  //       if(error.status=="0")
  //         this.errorMessage="Network error, please try again later."
  //       else
  //         this.errorMessage=error.error
  //       this.message=""
  //     }
  //   })
  //   }
  //   approve(leaveId?:number) {
  //     this.adminService.leaveApprove(leaveId).subscribe({
  //       next:(data:any)=>{
  //         console.log(data)
  //         this.message="Leave Approved"
  //         this.errorMessage=""
  //       },
  //       error:(error:any)=>{
  //         console.log(error)
  //         if(error.status=="0")
  //           this.errorMessage="Network error, please try again later."
  //         else
  //           this.errorMessage=error.error
  //         this.message=""
  //       }
  //     })
  //   }
  disapprove(leaveId?: number) {
    this.adminService.leaveDisapprove(leaveId).subscribe({
      next: (data: any) => {
        console.log(data);
        this.message = "Leave Disapproved";
        this.errorMessage = "";
      
        this.leavelist = this.leavelist.filter(leave => leave.leaveId !== leaveId);
      },
      error: (error: any) => {
        console.log(error);
        if (error.status == "0")
          this.errorMessage = "Network error, please try again later.";
        else
          this.errorMessage = error.error;
        this.message = "";
      }
    });
  }
  
  approve(leaveId?: number) {
    this.adminService.leaveApprove(leaveId).subscribe({
      next: (data: any) => {
        console.log(data);
        this.message = "Leave Approved";
        this.errorMessage = "";
        
        this.leavelist = this.leavelist.filter(leave => leave.leaveId !== leaveId);
      },
      error: (error: any) => {
        console.log(error);
        if (error.status == "0")
          this.errorMessage = "Network error, please try again later.";
        else
          this.errorMessage = error.error;
        this.message = "";
      }
    });
  }


}

