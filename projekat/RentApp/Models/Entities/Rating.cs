using System;

namespace RentApp.Models.Entities
{
    public class Rating
    {
        public int Id { get; set; }
        public int Rated { get; set; }
        public string Comment { get; set; }
        public DateTime Date { get; set; }
        public AppUser User { get; set; }
        public Service Service { get; set; }
    }
}