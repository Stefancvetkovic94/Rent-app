using System.Data.Entity;
using RentApp.Models.Entities;
using RentApp.Models.Repositories;

namespace RentApp.Persistance.Repository
{
    public class AppUserRepository : Repository<AppUser>, IAppUserRepository
    {
        public AppUserRepository(RADBContext context) : base(context)
        {
        }
    }
}