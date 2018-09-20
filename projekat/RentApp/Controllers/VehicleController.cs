using RentApp.Models;
using RentApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace RentApp.Controllers
{
    //[Authorize(Roles = "Admin")]
    [RoutePrefix("api/Vehicle")]
    public class VehicleController : ApiController
    {
        IRentAppUnitOfWork db;
        public VehicleController(IRentAppUnitOfWork unitOfWork)
        {
            this.db = unitOfWork;
        }

        // GET: api/Vehicle
        public IEnumerable<Vehicle> GetVehicles()
        {
            return db.Vehicle.GetAll();
            
        }

        // GET: api/Vehicle/5
        [ResponseType(typeof(Vehicle))]
        public IHttpActionResult GetVehicle(int id)
        {
            Vehicle vehicle = db.Vehicle.Get(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            return Ok(vehicle);
        }

        // POST: api/Vehicle
        [ResponseType(typeof(Vehicle))]
        public IHttpActionResult PostVehicle(Vehicle vehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Vehicle.Add(vehicle);
            db.Complete();

            return CreatedAtRoute("DefaultApi", new { id = vehicle.Id }, vehicle);
        }

        // PUT: api/Vehicle/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVehicle(int id, Vehicle vehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vehicle.Id)
            {
                return BadRequest();
            }

            try
            {
                var vehicleTemp = db.Vehicle.Get(id);
                vehicleTemp.Branch = vehicle.Branch;
                vehicleTemp.CostPerHour = vehicle.CostPerHour;
                vehicleTemp.Description = vehicle.Description;
                vehicleTemp.Manufacturer = vehicle.Manufacturer;
                vehicleTemp.Model = vehicle.Model;
                vehicleTemp.Pictureurl = vehicle.Pictureurl;
                vehicleTemp.Reservations = vehicle.Reservations;
                vehicleTemp.VehicleType = vehicle.VehicleType;
                vehicleTemp.Year = vehicle.Year;



                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleExists(id))
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

        // DELETE: api/Vehicle/5
        [ResponseType(typeof(Vehicle))]
        public IHttpActionResult DeleteVehicle(int id)
        {
            Vehicle vehicle = db.Vehicle.Get(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            db.Vehicle.Remove(vehicle);
            db.Complete();

            return Ok(vehicle);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
        }

        private bool VehicleExists(int id)
        {
            return db.Vehicle.Get(id) != null;
        }
    }
}
