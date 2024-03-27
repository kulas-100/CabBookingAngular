import { Component } from '@angular/core';
import { Route } from '../../model/route';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteService } from '../../services/route.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-update-routes',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './update-routes.component.html',
  styleUrl: './update-routes.component.css'
})
export class UpdateRoutesComponent {
  id: string | null = "";
   route :Route = new Route();
   message:string="";
   errorMessage:string="";



   constructor(private routeService:RouteService,private activatedRoute: ActivatedRoute,private router:Router) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   }
   ngOnInit(): void {
    this.routeService.getRouteById(this.id).subscribe({
      next:(data: any) => {
        console.log(data);
        this.route = data;
      },
      error:(err: any) => {
        console.log(err);
        this.errorMessage = "Could't Load Route";
        this.message = "";
      },
      complete:() => {
        console.log("Server completed sending data.");
      }
    });
  }
   updateNewRoute(){
      console.log(this.route);
      this.routeService.updateRoute(this.route)
      .subscribe({
        next:(data: any) => {
          console.log(data);
          this.message = "Route Updated.";
          this.errorMessage = "";
        },
        error:(err: any) => {
          console.log(err);
          
          if (err.status == "0")
            this.errorMessage = " Network error, please try again later."
          else
            this.errorMessage = err.error;
  
          this.message = "";
        }
      });
   }
   back(){
    this.router.navigate(["route/viewroute"])
   }
}


