import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../../custom-services/UserService';
import { User } from '../../../model/user';

@Injectable()
@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  user: User = new User();

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, userService: UserService) {

    this.user = userService.getUser();
   }

  ngOnInit() {
  }
  EditVehicle(vehicle: any, form: NgForm) {
    console.log('Vozilo ' + vehicle + ' je izmenjeno....');
    vehicle.Id = this.route.snapshot.params['vehicleid'];
    var id= this.route.snapshot.params['id']
    this.http.post('http://localhost:51680/api/Vehicle/' + vehicle.Id, vehicle)
      .subscribe((data) => {

        this.router.navigate(['/services/' + id]);
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
