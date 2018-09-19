using System.Collections.Generic;

namespace RentApp.Models.Entities
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LogoUrl { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }
        public bool Approved { get; set; }

        public ICollection<Branch> Branches { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public ICollection<Vehicle> Vehicles { get; set; }
    }
}