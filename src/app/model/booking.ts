import { Time } from "@angular/common";
import { Car } from "./car";
import { Payment } from "./payment";
import { Rating } from "./rating";
import { User } from "./user";

export class Booking {
    constructor(
        public id?: number,
        public startLocation?: string,
        public endLocation?: string,
        public bookingDate?: Date,
        public bookingTime?: Time,
        public status?: string,
        public fare?: number,
        public payment?: Payment,
        public rating?: Rating,
        public car? : Car
    ) { }
}
