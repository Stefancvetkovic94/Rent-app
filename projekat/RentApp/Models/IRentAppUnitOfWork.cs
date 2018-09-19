using System;
using RentApp.Models.Repositories;

namespace RentApp.Models
{
    public interface IRentAppUnitOfWork : IDisposable
    {
        IAppUserRepository AppUser { get; }
        IBranchRepository Branch { get; }
        IPictureConfirmationRepository PictureConfirmation { get; }
        IRatingRepository Rating { get; }
        IReservationRepository Reservation { get; }
        IServiceRepository Service { get; }
        IVehicleRepository Vehicle { get; }
        IVehicleTypeRepostiory VehicleType { get; }
        int Complete();
    }
}
