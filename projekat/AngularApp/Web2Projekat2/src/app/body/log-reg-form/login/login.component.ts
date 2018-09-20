import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import {Router} from '@angular/router';
import {UserService} from '../../../custom-services/UserService';
import {Observable} from 'rxjs';

@Injectable({providedIn:'root'})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login(user: User, form: NgForm) {
    /*console.log('Uspesan ulazak u login....');
    console.log(user);

    this.getTheToken(user);
    this.router.navigate(['/']);*/
  }

    getTheToken(user: User, form: NgForm) {

      let headers = new HttpHeaders();
      headers = headers.append('Content-type', 'application/x-www-form-urlencoded');

      if (!localStorage.jwt) {
        let x = this.http.post('http://localhost:51680/oauth/token',
          'username=' + user.email + '&password=' + user.password + '&grant_type=password',
          {'headers': headers}) as Observable<any>

        x.subscribe(
          res => {
            console.log(res.access_token);

            let jwt = res.access_token;

            let jwtData = jwt.split('.')[1]
            console.log(jwtData);
            let decodedJwtJsonData = window.atob(jwtData)
            console.log(decodedJwtJsonData);
            let decodedJwtData = JSON.parse(decodedJwtJsonData)
            console.log(decodedJwtData);

            let role = decodedJwtData.role

            console.log('jwtData: ' + jwtData)
            console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
            console.log('decodedJwtData: ' + decodedJwtData)
            console.log('Role ' + role)

            user.token = res.access_token;
            user.type = role;
            console.log(user);
            this.userService.setUser(user);

            localStorage.setItem('jwt', jwt)
            localStorage.setItem('role', role);
          },
          err => {
            console.log("Error occured");
          }
        );

        this.router.navigate(['/']);
      }
    }
}
