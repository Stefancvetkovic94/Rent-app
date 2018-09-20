export class Service
{
        public Id: number
        public Name: string
        public LogoUrl: string
        public Email: string
        public Description:string
        public Approved: boolean

        public Branches: object[]
        public Ratings: object[]
        public Vehicles: object[]
  constructor()
  {
      this.Name="";
      this.LogoUrl="";
      this.Email="";
      this.Description="";
      this.Approved=false;

      this.Branches;
      this.Ratings;
      this.Vehicles;
  }
}