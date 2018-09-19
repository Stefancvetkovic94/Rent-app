using System.Data.Entity;
using RentApp.Models;
using RentApp.Models.Repositories;
using RentApp.Persistance.Repository;
using Unity.Attributes;

namespace RentApp.Persistance
{
    public class RentAppUnitOfWork : IRentAppUnitOfWork
    {
        private readonly DbContext context;

        public RentAppUnitOfWork(DbContext context)
        {
            this.context = context;
        }
        
        [Dependency]
        public IAppUserRepository AppUser { get; set; }
        [Dependency]
        public IBranchRepository Branch { get; set; }
        [Dependency]
        public IPictureConfirmationRepository PictureConfirmation { get; set; }
        [Dependency]
        public IRatingRepository Rating { get; set; }
        [Dependency]
        public IReservationRepository Reservation { get; set; }
        [Dependency]
        public IServiceRepository Service { get; set; }
        [Dependency]
        public IVehicleRepository Vehicle { get; set; }
        [Dependency]
        public IVehicleTypeRepostiory VehicleType { get; set; }

        public int Complete()
        {
            return context.SaveChanges();
        }

        public void Dispose()
        {
            context.Dispose();
        }
    }
}