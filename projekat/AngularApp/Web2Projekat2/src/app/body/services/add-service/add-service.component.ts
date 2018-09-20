import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserService } from '../../../custom-services/UserService';
import { User } from '../../../model/user';


@Injectable()
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
 user: User=new User();
  constructor(private http: HttpClient, private router: Router,private userService: UserService) {
  this.user=userService.getUser()
   }

  ngOnInit() {
  }
  addService(service: any, form: NgForm) {

    console.log('Uspesno dodat '+ service);

    this.http.post('http://localhost:51680/api/Service', service)
      .subscribe((data) => {

        this.router.navigate(['/']);
      });
  }

  getRole() {
    if (!localStorage.role) {
      return '';
    } else {
      return localStorage.role;
    }
  }
}
