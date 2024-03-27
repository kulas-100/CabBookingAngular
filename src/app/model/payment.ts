export class Payment {
    constructor(
        public id?: number,
        public customerId?: number,
        public cabId?: number,
        public date?: Date,
        public status?: string,
        public amount?: number,
        public paymentMethod?: string
    ) { }
}
