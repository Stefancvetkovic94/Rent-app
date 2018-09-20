import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  register(user: any, form: NgForm) {

    this.http.post('http://localhost:51680/api/Account/Register', user)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['/']);
      });
  }

}
