export class Vehicle
{
    public id: number    
    public model: string
    public manufacturer: string
    public year: number
    public pictureurl: string
    public description: string
    public costPerHour: number
    public vehicleTypeId: number
    public branchId: number
    public reservations: object[]

  constructor()
  {
      this.id;
      this.model="";
      this.manufacturer="";
      this.year;
      this.pictureurl="";
      this.description="";
      this.costPerHour;
      this.vehicleTypeId;
      this.branchId;
      this.reservations;
  }
}