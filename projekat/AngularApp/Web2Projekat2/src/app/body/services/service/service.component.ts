import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Vehicle } from '../../../model/vehicle';
import { Reservation } from '../../../model/reservation';
import { Branch } from '../../../model/branch';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  id: string;
 vehicles: Vehicle[]=[];
 reservations: Reservation[]=[];
 branches: Branch[]=[];
  constructor(private http: HttpClient, private route: ActivatedRoute) {

    
    this.reservations[0]= new Reservation();
    this.reservations[0].id=4;
    this.reservations[0].vehicleId=3;
    
   }
   GetBranches() {
    this.http.get('http://localhost:51680/api/Branch')
      .subscribe((data:Map<number,Branch>) => {
        console.log(data); 
        var i=0;
        data.forEach(element => {
console.log(element);
         
          this.branches[i]= new Branch();
          this.branches[i].Address=element.Address;
          this.branches[i].Id=element.Id;
          this.branches[i].Latitude=element.Latitude;
          this.branches[i].Longitude=element.Longitude;
          this.branches[i].PictureUrl=element.PictureUrl;
          this.branches[i].Service=element.Service;

          console.log(this.branches[i]);
          i++;
        });
        
      });
  }

  GetVehicles() {
    this.http.get('http://localhost:51680/api/Vehicle')
      .subscribe((data:Map<number,Vehicle>) => {
        console.log(data); 
        var i=0;
        data.forEach(element => {
console.log(element);
         
          this.vehicles[i]= new Vehicle();
          this.vehicles[i].Id=element.Id;
          this.vehicles[i].CostPerHour=element.CostPerHour;
          this.vehicles[i].Description=element.Description;
          this.vehicles[i].Manufacturer=element.Manufacturer;
          this.vehicles[i].Model=element.Model;
          this.vehicles[i].Pictureurl=element.Pictureurl;
          this.vehicles[i].Year=element.Year;
          this.vehicles[i].Reservations=element.Reservations;
          this.vehicles[i].VehicleType=element.VehicleType;

          console.log(this.vehicles[i]);
          i++;
        });
        
      });
  }

DeleteBranch(id: number)
{
  console.log(id);
  this.http.delete('http://localhost:51680/api/Branch/' + id).subscribe(()=>{     
    while(this.branches.length>0)
    {
      this.branches.pop();
    }
    this.GetBranches();
  });
} 
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
   this.GetBranches();
   this.GetVehicles();
  }

}
