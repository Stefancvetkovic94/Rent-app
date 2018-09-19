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
    [RoutePrefix("api/Branch")]
    public class BranchController : ApiController
    {
        IRentAppUnitOfWork db;
        public BranchController(IRentAppUnitOfWork unitOfWork)
        {
            this.db = unitOfWork;
        }

        // GET: api/Branch
        public IEnumerable<Branch> GetBranches()
        {
            return db.Branch.GetAll();
        }

        // GET: api/Branch/5
        [ResponseType(typeof(Branch))]
        public IHttpActionResult GetBranch(int id)
        {
            Branch branch = db.Branch.Get(id);
            if (branch == null)
            {
                return NotFound();
            }

            return Ok(branch);
        }

        // POST: api/Branch
        [ResponseType(typeof(Branch))]
        public IHttpActionResult PostBranch(Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Branch.Add(branch);
            db.Complete();

            return CreatedAtRoute("DefaultApi", new { id = branch.Id }, branch);
        }

        // PUT: api/Branch/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBranch(int id, Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != branch.Id)
            {
                return BadRequest();
            }

            try
            {
                var branchTemp = db.Branch.Get(id);

                branchTemp.Address = branch.Address;
                branchTemp.Latitude = branch.Latitude;
                branchTemp.Longitude = branch.Longitude;
                branchTemp.PictureUrl = branch.PictureUrl;
                branchTemp.Service = branch.Service;
 
                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BranchExists(id))
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
        [ResponseType(typeof(Branch))]
        public IHttpActionResult DeleteBranch(int id)
        {
            Branch branch = db.Branch.Get(id);
            if (branch == null)
            {
                return NotFound();
            }

            db.Branch.Remove(branch);
            db.Complete();

            return Ok(branch);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
        }

        private bool BranchExists(int id)
        {
            return db.Branch.Get(id) != null;
        }
    }
}
