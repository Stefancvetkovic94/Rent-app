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
    [RoutePrefix("api/Reservation")]
    public class ReservationController : ApiController
    {
        IRentAppUnitOfWork db;
        public ReservationController(IRentAppUnitOfWork unitOfWork)
        {
            this.db = unitOfWork;
        }

        // GET: api/Reservation
        public IEnumerable<Reservation> GetReservations()
        {
            return db.Reservation.GetAll();
        }

        // GET: api/Reservation/5
        [ResponseType(typeof(Reservation))]
        public IHttpActionResult GetReservation(int id)
        {
            Reservation reservation = db.Reservation.Get(id);
            if (reservation == null)
            {
                return NotFound();
            }

            return Ok(reservation);
        }

        // POST: api/Reservation
        [ResponseType(typeof(Reservation))]
        public IHttpActionResult PostReservation(Reservation reservation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Reservation.Add(reservation);
            db.Complete();

            return CreatedAtRoute("DefaultApi", new { id = reservation.Id }, reservation);
        }

        // PUT: api/Reservation/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutReservation(int id, Reservation reservation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reservation.Id)
            {
                return BadRequest();
            }

            try
            {
                var reservationTemp = db.Reservation.Get(id);
                reservationTemp.TimeEnd = reservation.TimeEnd;
                reservationTemp.TimeStart = reservation.TimeStart;
                reservationTemp.User = reservation.User;
                reservationTemp.Vehicle = reservation.Vehicle;

                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
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

        // DELETE: api/Reservation/5
        [ResponseType(typeof(Reservation))]
        public IHttpActionResult DeleteReservation(int id)
        {
            Reservation reservation = db.Reservation.Get(id);
            if (reservation == null)
            {
                return NotFound();
            }

            db.Reservation.Remove(reservation);
            db.Complete();

            return Ok(reservation);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
        }

        private bool ReservationExists(int id)
        {
            return db.Reservation.Get(id) != null;
        }
    }
}
