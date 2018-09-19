using System.Data.Entity;
using RentApp.Models;
using RentApp.Models.Repositories;
using RentApp.Persistance.Repository;

namespace RentApp.Persistance
{
    public class RentAppUnitOfWork : IRentAppUnitOfWork
    {
        private readonly RADBContext _context;

        public RentAppUnitOfWork(RADBContext context)
        {
            _context = context;
            AppUser = new AppUserRepository(_context);
            Branch = new BranchRepository(_context);
            PictureConfirmation = new PictureConfirmationRepository(_context);
            Rating = new RatingRepository(_context);
            Reservation = new ReservationRepository(_context);
            Service = new ServiceRepository(_context);
            Vehicle = new VehicleRepository(_context);
            VehicleType = new VehicleTypeRepository(_context);
        }
        
        public IAppUserRepository AppUser { get; }
        public IBranchRepository Branch { get; }
        public IPictureConfirmationRepository PictureConfirmation { get; }
        public IRatingRepository Rating { get; }
        public IReservationRepository Reservation { get; }
        public IServiceRepository Service { get; }
        public IVehicleRepository Vehicle { get; }
        public IVehicleTypeRepostiory VehicleType { get; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}