import { Booking } from "./booking";

export class Rating {
    constructor(
        public booking?: Booking,
        public id?: number,
        public userId?: number,
        public driverId?: number,
        public point?: number,
        public review?: string
    ) { }
}