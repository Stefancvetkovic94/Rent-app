import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable()
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  addService(service: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(service);

    this.http.post('http://localhost:51680/api/Service', service)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['/']);
      });
  }
}
