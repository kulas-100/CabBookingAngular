import { Component } from '@angular/core';
import { Route } from '../../model/route';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-create-route',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-route.component.html',
  styleUrl: './create-route.component.css'
})
export class CreateRouteComponent {
  route :Route = new Route();
  message:string="";
  errorMessage:string="";



  constructor(private routeService:RouteService) { }



  addRoute(){
    console.log(this.route);
    this.routeService.addNewRoute(this.route)
    .subscribe({
      next:(data: any) => {
        console.log(data);
        this.message = "Route Added.";
        this.errorMessage = "";
      },
      error:(err: any) => {
        console.log(err);
        // this.errorMessage="Could't add Account";/
        if (err.status == "0")
          this.errorMessage = " Network error, please try again later."
        else
          this.errorMessage = err.error;



        this.message = "";
      }
    });
  }
}


