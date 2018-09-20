import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../../custom-services/UserService';
import { User } from '../../../model/user';


@Injectable()
@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

user: User = new User();

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, userService: UserService) {
this.user = userService.getUser();
   }

  ngOnInit() {

  }

  EditService(service: any, form: NgForm) {
    console.log('Servis ' + service + ' je uspesno izmenjen');

    service.Id = this.route.snapshot.params['id'];
    this.http.put('http://localhost:51680/api/Service/' + service.Id, service)
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
