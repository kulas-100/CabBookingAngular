import { Booking } from "./booking";

export class User {
    constructor(
        public id?: number,
        public name?: string,
        public cdsId?: string,
        public password?: string,
        public phoneNumber?: number,
        public address?: string,
        public bookings?: Booking[]
    ) { }

}
