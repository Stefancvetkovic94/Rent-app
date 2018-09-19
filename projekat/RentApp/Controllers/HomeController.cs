using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RentApp.Models.Entities;
using RentApp.Persistance;

namespace RentApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //using (var db = new RentAppUnitOfWork(new RADBContext()))
            //{
            //    db.VehicleType.Add(new VehicleType() { Id = 90, TypeName = "Test2" });
            //    db.Complete();
            //}

            using (var db = new RentAppUnitOfWork(new RADBContext()))
            {
                var x = db.VehicleType.GetAll();
                db.Complete();
            }

            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
