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
  id?: number;
   route :Route = new Route();
   message:string="";
   errorMessage:string="";
   numberId: string | null = "";



   constructor(private routeService:RouteService,private activatedRoute: ActivatedRoute,private router:Router) { 
   }
   ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.route = JSON.parse(params['routeData']);
      this.id = this.route.locationId;
    }
    )
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


function updateRoute() {
  throw new Error('Function not implemented.');
}

