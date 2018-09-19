using RentApp.Models.Entities;
using RentApp.Persistance.Repository;

namespace RentApp.Models.Repositories
{
    public interface IServiceRepository : IRepository<Service, int>
    {
    }
}
