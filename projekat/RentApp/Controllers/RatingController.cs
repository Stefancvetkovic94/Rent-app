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
    [RoutePrefix("api/Rating")]
    public class RatingController : ApiController
    {
        IRentAppUnitOfWork db;
        public RatingController(IRentAppUnitOfWork unitOfWork)
        {
            this.db = unitOfWork;
        }

        // GET: api/Rating
        public IEnumerable<Rating> GetRatings()
        {
            return db.Rating.GetAll();
        }

        // GET: api/Rating/5
        [ResponseType(typeof(Rating))]
        public IHttpActionResult GetRating(int id)
        {
            Rating rating = db.Rating.Get(id);
            if (rating == null)
            {
                return NotFound();
            }

            return Ok(rating);
        }

        // POST: api/Rating
        [ResponseType(typeof(Rating))]
        public IHttpActionResult PostRating(Rating rating)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Rating.Add(rating);
            db.Complete();

            return CreatedAtRoute("DefaultApi", new { id = rating.Id }, rating);
        }

        // PUT: api/Rating/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRating(int id, Rating rating)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rating.Id)
            {
                return BadRequest();
            }

            try
            {
                var ratingTemp = db.Rating.Get(id);
                ratingTemp.Comment = rating.Comment;
                ratingTemp.Date = rating.Date;
                ratingTemp.Rated = rating.Rated;
                ratingTemp.Service = rating.Service;
                ratingTemp.User = rating.User;

                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RatingExists(id))
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

        // DELETE: api/Branch/5
        [ResponseType(typeof(Rating))]
        public IHttpActionResult DeleteRating(int id)
        {
            Rating rating = db.Rating.Get(id);
            if (rating == null)
            {
                return NotFound();
            }

            db.Rating.Remove(rating);
            db.Complete();

            return Ok(rating);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
        }

        private bool RatingExists(int id)
        {
            return db.Rating.Get(id) != null;
        }
    }
}
