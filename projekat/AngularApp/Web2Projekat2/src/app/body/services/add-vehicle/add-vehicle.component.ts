import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addVehicle(vehicle: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(vehicle);

    this.http.post('http://localhost:51680/services/:id/add-vehicle', vehicle)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['/']);
      });
}
}
