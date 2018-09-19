using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RentApp.Models.Entities;
using RentApp.Models;

namespace RentApp.Controllers
{
    public class HomeController : Controller
    {
        IRentAppUnitOfWork unitOfWork;
        public HomeController(IRentAppUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public ActionResult Index()
        {
            //unitOfWork.VehicleType.Add(new VehicleType { TypeName = "Test" });
            //unitOfWork.Complete();

            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
