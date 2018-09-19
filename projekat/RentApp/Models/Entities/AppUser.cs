using System;
using System.Collections.Generic;

namespace RentApp.Models.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public bool Approved { get; set; }
        public bool ManagerCreationAllowed { get; set; }

        public ICollection<PictureConfirmation> Pictures { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
        public ICollection<Rating> Ratings { get; set; }
    }
}