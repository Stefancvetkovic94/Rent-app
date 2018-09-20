export class Vehicle
{
    public Id: number    
    public Model: string
    public Manufacturer: string
    public Year: number
    public Pictureurl: string
    public Description: string
    public CostPerHour: number
    public VehicleType: number
    public Branch: number
    public Reservations: object[]

  constructor()
  {
      this.Id;
      this.Model="";
      this.Manufacturer="";
      this.Year;
      this.Pictureurl="";
      this.Description="";
      this.CostPerHour;
      this.VehicleType;
      this.Branch;
      this.Reservations;
  }
}