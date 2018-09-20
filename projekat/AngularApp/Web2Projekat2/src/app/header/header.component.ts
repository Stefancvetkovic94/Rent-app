import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.http.post('http://localhost:51680/api/Account/Logout', null);
    delete localStorage.token;
    delete localStorage.role;

    this.router.navigate(['/']);
  }

  isLogged() {
    if (!localStorage.token) {
      return false;
    } else {
      return true;
    }
  }

}
