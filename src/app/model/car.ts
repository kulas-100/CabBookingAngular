import { Booking } from "./booking";
import { Driver } from "./driver";
import { Route } from "./route";

export class Car {
    constructor(
        public id?: number,
        public type?: string,
        public carNumber?: string,
        public capacity?: number,
        public availableSeats?: number,
        public driver?: Driver,
        public bookings?: Booking[],
        public route?: Route
    ) { }
}
