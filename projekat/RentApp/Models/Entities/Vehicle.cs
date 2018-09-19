using System.Collections.Generic;

namespace RentApp.Models.Entities
{
    public class Vehicle
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public string Manufacturer { get; set; }
        public int Year { get; set; }
        public string Pictureurl { get; set; }
        public string Description { get; set; }
        public double CostPerHour { get; set; }
        public VehicleType VehicleType { get; set; }
        public Service Branch { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }
}