import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Vehicle } from '../../../model/vehicle';
import { Reservation } from '../../../model/reservation';
import { Branch } from '../../../model/branch';
import { UserService } from '../../../custom-services/UserService';
import { User } from '../../../model/user';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  id: string;
 vehicles: Vehicle[] = [];
 reservations: Reservation[] = [];
 branches: Branch[] = [];
 user: User = new User();
  constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) {
this.user = userService.getUser();

    this.reservations[0] = new Reservation();
    this.reservations[0].id = 4;
    this.reservations[0].vehicleId = 3;

   }
   GetBranches() {
    this.http.get('http://localhost:51680/api/Branch')
      .subscribe((data: Map <number, Branch>) => {
        var i = 0;
        data.forEach(element => {

          this.branches[i] = new Branch();
          this.branches[i].Address = element.Address;
          this.branches[i].Id = element.Id;
          this.branches[i].Latitude = element.Latitude;
          this.branches[i].Longitude = element.Longitude;
          this.branches[i].PictureUrl = element.PictureUrl;
          this.branches[i].Service = element.Service;

          i++;
        });

      });
  }

  GetVehicles() {
    this.http.get('http://localhost:51680/api/Vehicle')
      .subscribe((data: Map <number, Vehicle>) => {
        var i = 0;
        data.forEach(element => {

          this.vehicles[i] = new Vehicle();
          this.vehicles[i].Id = element.Id;
          this.vehicles[i].CostPerHour = element.CostPerHour;
          this.vehicles[i].Description = element.Description;
          this.vehicles[i].Manufacturer = element.Manufacturer;
          this.vehicles[i].Model = element.Model;
          this.vehicles[i].Pictureurl = element.Pictureurl;
          this.vehicles[i].Year = element.Year;
          this.vehicles[i].Reservations = element.Reservations;
          this.vehicles[i].VehicleType = element.VehicleType;

          i++;
        });

      });
  }

  DeleteBranch(id: number) {
    this.http.delete('http://localhost:51680/api/Branch/' + id).subscribe(() => {
      while (this.branches.length > 0) {
        this.branches.pop();
      }
      this.GetBranches();
    });
  }

  DeleteVehicle(id: number) {
    this.http.delete('http://localhost:51680/api/Vehicle/' + id).subscribe(() => {
      while (this.vehicles.length > 0) {
        this.vehicles.pop();
      }
      this.GetVehicles();
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.GetBranches();
    this.GetVehicles();
  }

  getRole() {
    if (!localStorage.role) {
      return '';
    } else {
      return localStorage.role;
    }
  }

}
