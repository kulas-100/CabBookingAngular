import { Car } from "./car";
import { Rating } from "./rating";
import { Ride } from "./ride";

export class Driver {
    constructor(
        public id?: number,
        public name?: string,
        public emailId?: string,
        public password?: string,
        public phoneNumber?: number,
        public licenseNumber?: number,
        public ratings?: Rating[],
        public car?: Car,
        public rides?: Ride[]
    ) { }
}

