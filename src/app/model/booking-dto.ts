export class BookingDto {
    constructor(
        public customerId?: number,
        public cabId?: number,
        public paymentId?: number,
        public date?: Date,
        public status?: string,
        public amount?: number,
        public paymentMethod?: string
    ) { } 
}
