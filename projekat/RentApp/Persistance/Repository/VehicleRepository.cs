using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using RentApp.Models.Entities;
using RentApp.Models.Repositories;

namespace RentApp.Persistance.Repository
{
    public class VehicleRepository : Repository<Vehicle>, IVehicleRepository
    {
        public VehicleRepository(RADBContext context) : base(context)
        {
        }

        public IEnumerable<Vehicle> GetVehiclesPage(int pageIndex, int pageSize)
        {
            return RentAppContext.Vehicles
                .OrderBy(v => v.Model)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .ToList();
        }

        public RADBContext RentAppContext
        {
            get { return Context as RADBContext; }
        }
    }
}