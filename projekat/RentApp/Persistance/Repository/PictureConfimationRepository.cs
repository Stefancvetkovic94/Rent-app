using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using RentApp.Models.Entities;
using RentApp.Models.Repositories;

namespace RentApp.Persistance.Repository
{
    public class PictureConfirmationRepository : Repository<PictureConfirmation>, IPictureConfirmationRepository
    {
        public PictureConfirmationRepository(RADBContext context) : base(context)
        {
        }
    }
}