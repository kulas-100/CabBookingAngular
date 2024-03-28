import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '../../model/route';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-display-routes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './display-all-routes.component.html',
  styleUrl: './display-all-routes.component.css'
})
export class DisplayAllRoutesComponent {
  showelement:boolean = false;
  routes:Route[] = [];
  message:string="";
  errorMessage:string="";
  constructor(private routeService:RouteService,private router: Router) { 
    this.routeService.getAllRoute().subscribe({
      next:(data: any) => {
        this.routes = data;
        console.log(data);
        
      },
      error:(err:any) => {
        console.log(err);
        this.errorMessage = "Could't Load Routes";
        this.message = "";
      },
      complete:() => {
        console.log("Server completed sending data.");
      }
    });
  }
   
  updateRoute(route:Route){
    console.log(route);
    this.router.navigate(["update-routes"], {queryParams: {routeData:JSON.stringify(route)}});
  }
  deleteRouteById(id?:number){
    console.log("delete id:"+id);
    if(confirm("Do you want to Delete Route id:"+id))
    this.routeService.deleteRouteById(id).subscribe({
      next:(resp:any) =>{
        console.log(resp);
        // delete route with id in local array
        this.routes = this.routes.filter((r) => r.locationId != id);
        this.message = "Deleted Route with id:"+id;
        this.errorMessage = "";
      },
      error:(err:any) =>{
        console.log(err);
        this.message = "";
        this.errorMessage = "CoulD not Delete Route.";
      }
    });
  }
}
