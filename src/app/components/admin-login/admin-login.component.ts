import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginDto } from '../../model/admin-login-dto';
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  adminLoginDto: AdminLoginDto = new AdminLoginDto;
  adminId?: number = 0;
  adminAccount: Admin = new Admin;

  constructor(private router:Router, private adminService: AdminService){
  }
  register(){
    this.router.navigateByUrl('/Register');
  }
  login() {
    this.adminService.adminLogin(this.adminLoginDto).subscribe(
      {
        next:(data)=>{
          this.adminAccount = data;
          console.log(data);
          this.adminId = this.adminAccount.id;
          localStorage.setItem("adminId",this.adminId as unknown as string);
          this.router.navigate(['/admin-home']);
        },
        error:(err)=>{
          console.log(err);
        }
      }
    );
  }

}
