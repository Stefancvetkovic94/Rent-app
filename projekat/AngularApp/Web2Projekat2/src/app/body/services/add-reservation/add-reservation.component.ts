import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../custom-services/UserService';

@Injectable()
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
user: User = new User();
  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    this.user = userService.getUser();
   }

  ngOnInit() {
  }
  addReservation(reservation: any, form: NgForm) {
    console.log('Uspesno dodata ' + reservation);


    this.http.post('http://localhost:51680/api/Reservation', reservation)
      .subscribe((data) => {

        this.router.navigate(['/']);
      });
  }
}
