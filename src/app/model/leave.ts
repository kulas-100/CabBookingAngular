export class Leave { 
   constructor(
    public leaveId?:number,
    public driverId?:number,
    public startDate?:Date,
    public endDate?:Date,
    public status?:string,
    public reason?:string
    ){}
}