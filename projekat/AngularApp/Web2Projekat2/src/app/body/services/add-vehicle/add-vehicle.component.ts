import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../../custom-services/UserService';
import { User } from '../../../model/user';

@Injectable()
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  user: User=new User();
  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute, userService: UserService) {
    this.user=userService.getUser();
   }

  ngOnInit() {
  }

  addVehicle(vehicle: any, form: NgForm) {
    console.log('Uspesno dodato ' + vehicle);

    this.http.post('http://localhost:51680/api/Vehicle', vehicle)
      .subscribe((data) => {

        this.router.navigate(['services/'+this.route.snapshot.params['id']]);
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
