import { Time } from "@angular/common";

export class Booking {
    constructor(
        public id?: number,
        public startLocation?: string,
        public endLocation?: string,
        public bookingDate?: Date,
        public bookingTime?: Time,
        public status?: string,
        public fare?: number,
    ) { }
}
