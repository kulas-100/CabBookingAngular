import { Time } from "@angular/common";
import { Driver } from "./driver";

export class Ride {
    constructor(
        public id?: number,
        public rideDate?: Date,
        public startTime?: Time,
        public endTime?: Time,
        public fare?: number,
        public status?: string,
        public driver?: Driver
    ) { }
}
