import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../custom-services/UserService';



@Injectable()
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

 services: Service[] = []
 user: User;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private userService: UserService) {

  }
  GetServices() {
    this.http.get('http://localhost:51680/api/Service')
      .subscribe((data: Map <number, Service>) => {
        var i = 0;
        data.forEach(element => {


          this.services[i] = new Service();
          this.services[i].Branches = element.Branches;
          this.services[i].Id = element.Id;
          this.services[i].Description = element.Description;
          this.services[i].Email = element.Email;
          this.services[i].LogoUrl = element.LogoUrl;
          this.services[i].Name = element.Name;
          this.services[i].Approved = element.Approved;
          this.services[i].Ratings = element.Ratings;
          this.services[i].Vehicles = element.Vehicles;

          i++;
        });

      });
  }

  CheckIfAdmin() {
    {
      if (localStorage.role === 'admin') {
        return true;
      } else {
        return false;
      }
    }
  }

  DeleteService(id: number) {

    this.http.delete('http://localhost:51680/api/Service/' + id).subscribe(() => {
      while(this.services.length > 0)
      {
        this.services.pop();
      }
      this.GetServices();
    });
  }

  ngOnInit() {
    this.GetServices()
    console.log(localStorage.role);
    console.log(localStorage.token);
  }

  addVehicle(service: any, form: NgForm) {
    console.log('Uspesno dodato vozilo' + service);

    this.http.post('http://localhost:51680/api/Service', service)
      .subscribe((data) => {

        this.router.navigate(['services/' + this.route.snapshot.params['id']]);
      });
  }

  getRole() {
    if (!localStorage.role) {
      return '';
    } else {
      return localStorage.role;
    }
  }
}
