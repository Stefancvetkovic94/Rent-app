using System;

namespace RentApp.Models.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime TimeStart { get; set; }
        public DateTime TimeEnd { get; set; }
        public AppUser User { get; set; }
        public Vehicle Vehicle { get; set; }
    }
}