export class Service
{
    public id: number
        public name: string
        public logoUrl: string
        public email: string
        public description:string
        public approved: boolean

        public branches: object[]
        public ratings: object[]
        public vehicles: object[]
  constructor()
  {
      this.name="";
      this.logoUrl="";
      this.email="";
      this.description="";
      this.approved=false;

      this.branches;
      this.ratings;
      this.vehicles;
  }
}