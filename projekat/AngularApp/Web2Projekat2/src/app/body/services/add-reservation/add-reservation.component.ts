import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  addReservation(service: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(service);

    this.http.post('http://localhost:51680/services/:id/add-reservation', service)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['/']);
      });
  }
}
