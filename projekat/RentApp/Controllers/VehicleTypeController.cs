using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RentApp.Models;
using RentApp.Models.Entities;
using RentApp.Persistance;

namespace RentApp.Controllers
{
    //[Authorize(Roles = "Admin")]
    [RoutePrefix("api/VehicleType")]
    public class VehicleTypeController : ApiController
    {
        IRentAppUnitOfWork db;
        public VehicleTypeController(IRentAppUnitOfWork unitOfWork)
        {
            this.db = unitOfWork;
        }

        // GET: api/VehicleType
        public IEnumerable<VehicleType> GetVehicleTypes()
        {
            return db.VehicleType.GetAll();
        }

        // GET: api/VehicleType/5
        [ResponseType(typeof(VehicleType))]
        public IHttpActionResult GetVehicleType(int id)
        {
            VehicleType vehicleType = db.VehicleType.Get(id);
            if (vehicleType == null)
            {
                return NotFound();
            }

            return Ok(vehicleType);
        }

        // POST: api/VehicleType
        [ResponseType(typeof(VehicleType))]
        public IHttpActionResult PostVehicleType(VehicleType vehicleType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.VehicleType.Add(vehicleType);
            db.Complete();

            return CreatedAtRoute("DefaultApi", new {id = vehicleType.Id}, vehicleType);
        }

        // PUT: api/VehicleType/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVehicleType(int id, VehicleType vehicleType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vehicleType.Id)
            {
                return BadRequest();
            }
            
            try
            {
                var tempVehicleType = db.VehicleType.Get(id);
                tempVehicleType.TypeName = vehicleType.TypeName;
                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/VehicleType/5
        [ResponseType(typeof(VehicleType))]
        public IHttpActionResult DeleteVehicleType(int id)
        {
            VehicleType vehicleType = db.VehicleType.Get(id);
            if (vehicleType == null)
            {
                return NotFound();
            }

            db.VehicleType.Remove(vehicleType);
            db.Complete();

            return Ok(vehicleType);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
        }

        private bool VehicleTypeExists(int id)
        {
            return db.VehicleType.Get(id) != null;
        }
    }
}
