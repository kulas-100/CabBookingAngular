import { Component } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentDto } from '../../model/payment-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDto } from '../../model/booking-dto';
import { Booking } from '../../model/booking';
import { Payment } from '../../model/payment';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  newPayment: Payment = new Payment;
  message: string = "";
  errorMessage: string = "";
  paymentDto: PaymentDto= new PaymentDto;
  bookingDto:BookingDto=new BookingDto;
  booking:Booking=new Booking;
  userId?:number;
  cabId?:number;
  fare?:number;
  paymentMethod?: string;
  id: string | null = localStorage.getItem("userId") ?? null;
  numberId: number = this.id !== null ? +this.id : 0;


  constructor(private userService: UserService,private route:ActivatedRoute,private router:Router) { 
  }
  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
      this.paymentDto = JSON.parse(params['paymentData']); 
      this.userId=this.paymentDto.userId;
      this.cabId=this.paymentDto.cabId;
      this.fare=this.paymentDto.fare;
    });
  }


  addPayment() {
    this.paymentDto.paymentMethod = this.newPayment.paymentMethod; 
    this.paymentMethod = this.paymentDto.paymentMethod;
    this.userService.makePayment(this.paymentDto)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.bookingDto = data;
            this.message = "Payment successful!";
            this.errorMessage = "";
            console.log(this.bookingDto);
            this.userService.bookCab(this.bookingDto).subscribe(
              {
                next:(data)=>{
                  console.log(data);
                  this.booking = data;
                  this.router.navigate(['/payment-success'], { queryParams: { bookingData: JSON.stringify(this.booking) } });
                },
                error:(err)=>{
                  console.log(err);
                }
              }
            )
          },
          error: (err) => {
            console.log(err);
            // this.errorMessage="Could't add Account";/
            if (err.status == "0")
              this.errorMessage = " Network error, please try again later."
            else
              this.errorMessage = err.error;
            this.message = "";
          }
        }
      );
  }
  cancelPayment() {
    this.router.navigate(['user-home/book-cab']);
  }
}

