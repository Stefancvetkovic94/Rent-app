import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Vehicle } from '../../../model/vehicle';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  id: string;
 vehicles: Vehicle[]=[];
  constructor(private http: HttpClient, private route: ActivatedRoute) {

    this.vehicles[0]=new Vehicle();
    this.vehicles[0].id=3;
    this.vehicles[0].model="jaguar";
    this.vehicles[0].year=2015;

    console.log(this.vehicles[0]);

    this.vehicles[1]= new Vehicle();
    this.vehicles[1].id=2;
    this.vehicles[1].model="ferari";
    this.vehicles[1].year=2017;
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
  }

}
