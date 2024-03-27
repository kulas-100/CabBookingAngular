import { Booking } from "./booking";

export class RatingDto {
    constructor(
        public driverId?: number,
        public userId?: number,
        public booking?: Booking
    ) { }
}
