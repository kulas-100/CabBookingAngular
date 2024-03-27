export class PaymentDto {
    constructor(
        public userId?: number,
        public cabId?: number,
        public fare?: number,
        public paymentMethod?: string
    ) { }
}
