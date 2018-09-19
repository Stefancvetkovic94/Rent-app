import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  register(user: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(user);

    this.http.post('http://localhost:51680/api/Account/Register', user)
      .subscribe((data) => {
        console.log(data);
      });
  }

}
