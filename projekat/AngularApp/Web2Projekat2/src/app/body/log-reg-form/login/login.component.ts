import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login(user: any, form: NgForm) {
    console.log('Uspesan ulazak u login....');
    console.log(user);

    this.http.post('http://localhost:51680/api/Account/Register', user)
      .subscribe((data) => {
        console.log(data);
      });

  }

}
