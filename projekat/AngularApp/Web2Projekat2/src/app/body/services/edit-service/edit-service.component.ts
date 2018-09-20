import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable()
@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  editService(service: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(service);

    this.http.post('http://localhost:51680/services/add-service', service)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['/']);
      });
  }
}
