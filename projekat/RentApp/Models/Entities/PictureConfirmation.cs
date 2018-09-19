namespace RentApp.Models.Entities
{
    public class PictureConfirmation
    {
        public int Id { get; set; }
        public string PictureUrl { get; set; }
        public AppUser User { get; set; }
    }
}