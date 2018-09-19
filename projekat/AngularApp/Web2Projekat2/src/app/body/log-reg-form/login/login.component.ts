import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login(user: any, form: NgForm) {
    console.log('Uspesan ulazak u login....');
    console.log(user);

    user.granttype = 'Admin';
    user.clientid = 'admin';
    user.password = 'admin';

    this.http.post('http://localhost:51680/oauth/token', user)
      .subscribe((data) => {
        console.log(data);

        this.router.navigate(['/']);
      });

  }

}
