import { Time } from "@angular/common";

export class Route {
    constructor(
        public locationId?: number,
        public startLocation?: string,
        public endLocation?: string,
        public fare?: number,
        public startTime?: Time,
        public endTime?: Time
    ) { }
}
