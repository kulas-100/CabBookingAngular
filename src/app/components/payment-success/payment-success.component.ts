import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../../model/booking';
import { QrCodeModule } from 'ng-qrcode';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [QrCodeModule],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent {
  constructor(private userService: UserService,private route:ActivatedRoute,private router:Router) { 
  }
  booking: Booking = new Booking;
  countdown: number = 10;
  qrValue: string = "";
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.booking = JSON.parse(params['bookingData']); 
    this.qrValue = "Booking id: "+this.booking.id+
    "\nStart Location: "+this.booking.startLocation+
    "\nEnd Location: "+this.booking.endLocation+
    "\nFare: "+this.booking.fare+
    "\nPayment Method: "+this.booking.payment?.paymentMethod+
    "\nStatus: "+this.booking.status;
    //this.qrValue = JSON.stringify(this.booking.id);
    console.log(this.qrValue);
    this.startCountdown();
    });
  }

  startCountdown():void{
    const countDownInterval = setInterval(()=>{
      this.countdown--;
      if(this.countdown <= 0){
        clearInterval(countDownInterval);
        this.goBack();
      }
    }, 1000);
  }

  goBack(){
    this.router.navigate(['/view-bookings']);
  }
}
