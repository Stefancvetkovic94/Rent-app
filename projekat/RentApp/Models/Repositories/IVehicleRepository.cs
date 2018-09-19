using System.Collections.Generic;
using RentApp.Models.Entities;
using RentApp.Persistance.Repository;

namespace RentApp.Models.Repositories
{
    public interface IVehicleRepository : IRepository<Vehicle>
    {
        IEnumerable<Vehicle> GetVehiclesPage(int pageIndex, int pageSize);
    }
}
