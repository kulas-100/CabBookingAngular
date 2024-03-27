import { Rating } from "./rating";

export class AddRatingDto {
    constructor(
        public bookingId?: number,
        public rating?: Rating
    ) { }
}
