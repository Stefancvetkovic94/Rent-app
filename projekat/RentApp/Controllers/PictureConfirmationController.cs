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
    [RoutePrefix("api/PictureConfirmation")]
    public class PictureConfirmationController : ApiController
    {
        IRentAppUnitOfWork db;
        public PictureConfirmationController(IRentAppUnitOfWork unitOfWork)
        {
            this.db = unitOfWork;
        }

        // GET: api/PictureConfirmation
        public IEnumerable<PictureConfirmation> GetPictureConfirmation()
        {
            return db.PictureConfirmation.GetAll();
        }

        // GET: api/PictureCnfirmation/5
        [ResponseType(typeof(PictureConfirmation))]
        public IHttpActionResult GetPictureConfirmation(int id)
        {
            PictureConfirmation pictureCnfirmation = db.PictureConfirmation.Get(id);
            if (pictureCnfirmation == null)
            {
                return NotFound();
            }

            return Ok(pictureCnfirmation);
        }

        // POST: api/PictureConfirmation
        [ResponseType(typeof(PictureConfirmation))]
        public IHttpActionResult PostPictureConfirmation(PictureConfirmation pictureConfirmation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PictureConfirmation.Add(pictureConfirmation);
            db.Complete();

            return CreatedAtRoute("DefaultApi", new { id = pictureConfirmation.Id }, pictureConfirmation);
        }

        // PUT: api/PictureConfirmation/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPictureConfirmation(int id, PictureConfirmation pictureConfirmation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pictureConfirmation.Id)
            {
                return BadRequest();
            }

            try
            {
                var pictureConfirmationTemp = db.PictureConfirmation.Get(id);

                pictureConfirmationTemp.PictureUrl = pictureConfirmation.PictureUrl;
                pictureConfirmationTemp.User = pictureConfirmation.User;

                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PictureConfirmationExists(id))
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

        // DELETE: api/PictureConfirmation/5
        [ResponseType(typeof(PictureConfirmation))]
        public IHttpActionResult DeletePictureConfirmation(int id)
        {
            PictureConfirmation pictureConfirmation = db.PictureConfirmation.Get(id);
            if (pictureConfirmation == null)
            {
                return NotFound();
            }

            db.PictureConfirmation.Remove(pictureConfirmation);
            db.Complete();

            return Ok(pictureConfirmation);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
        }

        private bool PictureConfirmationExists(int id)
        {
            return db.PictureConfirmation.Get(id) != null;
        }
    }
}
