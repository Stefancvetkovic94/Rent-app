import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { Vehicle } from '../../../../model/vehicle';



@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle:Vehicle = new Vehicle();
  constructor(private http: HttpClient,private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route = this.route.snapshot.params['id'];
  }



}
