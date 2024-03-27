import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { LocationDto } from '../../model/location-dto';
import { Car } from '../../model/car';
import { SelectionDto } from '../../model/selection-dto';
import { PaymentDto } from '../../model/payment-dto';

@Component({
  selector: 'app-search-cab',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-cab.component.html',
  styleUrl: './search-cab.component.css'
})
export class SearchCabComponent {

  locationDto: LocationDto = new LocationDto; 
  selectionDto: SelectionDto = new SelectionDto;
  paymentDto: PaymentDto = new PaymentDto;
  cabList: Car[] = [];
  errorMessage: string = "";
  length: number = 1;
  clickSearch: boolean = false;
  id: string | null = localStorage.getItem("userId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;

  constructor(private userService: UserService, private router: Router) { }
  searchCab(){
    this.clickSearch = true;
    this.userService.listOfCabs(this.locationDto).subscribe(
      {
        next:(data)=>{
          this.cabList = data;
          console.log(this.cabList);
        },
        error:(err)=>{
          this.errorMessage = err;
        }
      }
    )
    if(this.cabList.length === 0){
      this.length = 0;
    }
  }

  selectCab(cabId?: number){
    this.selectionDto.cabId = cabId;
    this.selectionDto.userId = this.numberId;
    this.userService.selectCab(this.selectionDto).subscribe(
      {
        next:(data)=>{
          this.paymentDto = data;
          console.log(this.paymentDto);
          this.router.navigate(['/payment'], { queryParams: { paymentData: JSON.stringify(this.paymentDto) } });
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }
}
