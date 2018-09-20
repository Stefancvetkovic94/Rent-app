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

    this.vehicles[0]=new Vehicle();
    this.vehicles[0].id=3;
    this.vehicles[0].model="jaguar";
    this.vehicles[0].year=2015;

    this.vehicles[1]= new Vehicle();
    this.vehicles[1].id=2;
    this.vehicles[1].model="ferari";
    this.vehicles[1].year=2017;

    this.reservations[0]= new Reservation();
    this.reservations[0].id=4;
    this.reservations[0].vehicleId=3;
    
    this.branches[0]= new Branch();
    this.branches[0].addres="aaaa";
    this.branches[0].latitude=142141;
    this.branches[0].longitude=23123;
    this.branches[0].serviceid=2;
    
    this.branches[1]= new Branch();
    this.branches[1].addres="bbbbbb";
    this.branches[1].latitude=5555555;
    this.branches[1].longitude=1231232222;
    this.branches[1].serviceid=3;
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
  }

}
