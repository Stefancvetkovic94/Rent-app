namespace RentApp.Models.Entities
{
    public class Branch
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string PictureUrl { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public Service Service { get; set; }
    }
}