import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  EditVehicle(vehicle: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(vehicle);

    this.http.post('http://localhost:51680/services/:id/edit-vehicle', vehicle)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['/']);
      });
}

}
