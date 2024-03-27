import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';
import { Booking } from '../model/booking';

@Pipe({
  name: 'sortBooking',
  standalone: true
})
export class SortProductPipe implements PipeTransform {

  // products | sortProduct :'colName'
  transform(booking: Booking[], sortBy: string = 'bookingDate'): Booking[] {

  if (booking.length < 0) return booking;

    switch (sortBy) {
      case "bookingDate":

        booking.sort((p1, p2) => {
          if (p1.bookingDate != undefined && p2.bookingDate 
            != undefined) {
            if (p1.bookingDate > p2.bookingDate) return -1;
            else
              if (p1.bookingDate < p2.bookingDate) return 1;
          }
          return 0; // they are euqal

        });
        break;
      default:
        booking.sort((p1, p2) => {
          if (p1.id != undefined && p2.id != undefined) {
            return p1.id - p2.id;
          }
          return 0;
        });
    }

    return booking;
  }


}
