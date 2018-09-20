import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';



@Injectable()
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

 services: Service[]= []

 
  constructor(private http: HttpClient, private router: Router) { 
    this.services[0]=new Service();
    this.services[0].id=3;
    this.services[0].name="servis1"
    this.services[1]=new Service();
    this.services[1].id=2;
    this.services[1].name="servis2"

  }


  ngOnInit() {

  }

  deleteService(service: any, id: number) {
    console.log('Servis je uspesno obrisan....');
    console.log(service);

    /*this.http.post('http://localhost:51680/services/delete/' + id, service)
      .subscribe((data) => {
        this.
        console.log(data);


        this.router.navigate(['/']);
      });*/
  }

}
