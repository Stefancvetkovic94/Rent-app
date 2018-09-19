import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../model/vehicle';
import { Service } from '../../model/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

 services: Service[]= []

 
  constructor() { 
    this.services[0]=new Service();
    this.services[0].id=3;
    this.services[0].name="servis1"
    this.services[1]=new Service();
    this.services[1].id=2;
    this.services[1].name="servis2"

  }


  ngOnInit() {
  }

}
