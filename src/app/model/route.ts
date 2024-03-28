import { Time } from "@angular/common";

export class Route {
    constructor(
        public locationId?: number,
        public startLocation?: string,
        public endLocation?: string,
        public fare?: number,
        public startTime?: string,
        public endTime?: string
    ) { }
}
