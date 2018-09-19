using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RentApp.Models.Entities;
using RentApp.Persistance;
using RentApp.Models;

namespace RentApp.Controllers
{
    //[Authorize(Roles = "Admin")]
    [RoutePrefix("api/Services")]
    public class ServiceController : ApiController
    {
        IRentAppUnitOfWork db;
        public ServiceController(IRentAppUnitOfWork unitOfWork)
        {
            this.db = unitOfWork;
        }

        // GET: api/Service
        public IEnumerable<Service> GetServices()
        {
            return db.Service.GetAll();
        }

        // GET: api/Service/5
        [ResponseType(typeof(Service))]
        public IHttpActionResult GetService(int id)
        {
            Service service = db.Service.Get(id);
            if (service == null)
            {
                return NotFound();
            }

            return Ok(service);
        }

        // POST: api/Service
        [ResponseType(typeof(Service))]
        public IHttpActionResult PostService(Service service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Service.Add(service);
            db.Complete();

            return CreatedAtRoute("DefaultApi", new { id = service.Id }, service);
        }

        // PUT: api/Service/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutService(int id, Service service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != service.Id)
            {
                return BadRequest();
            }

            try
            {
                var serviceTemp = db.Service.Get(id);
                serviceTemp.Approved = service.Approved;
                serviceTemp.Branches = service.Branches;
                serviceTemp.Description = service.Description;
                serviceTemp.Email = service.Email;             
                serviceTemp.LogoUrl = service.LogoUrl;
                serviceTemp.Name = service.Name;
                serviceTemp.Ratings = service.Ratings;
                serviceTemp.Vehicles = service.Vehicles;

                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceExists(id))
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

        // DELETE: api/Service/5
        [ResponseType(typeof(VehicleType))]
        public IHttpActionResult DeleteService(int id)
        {
            Service service = db.Service.Get(id);
            if (service == null)
            {
                return NotFound();
            }

            db.Service.Remove(service);
            db.Complete();

            return Ok(service);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
        }

        private bool ServiceExists(int id)
        {
            return db.Service.Get(id) != null;
        }
    }
}
