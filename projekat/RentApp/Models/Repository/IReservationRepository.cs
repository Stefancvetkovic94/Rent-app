using RentApp.Models.Entities;
using RentApp.Persistance.Repository;

namespace RentApp.Models.Repositories
{
    public interface IReservationRepository : IRepository<Reservation, int>
    {
    }
}
