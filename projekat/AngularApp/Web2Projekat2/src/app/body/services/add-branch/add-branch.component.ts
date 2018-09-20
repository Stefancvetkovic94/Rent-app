import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../../custom-services/UserService';
import { User } from '../../../model/user';

@Injectable()
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
user: User = new User();
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private userService: UserService) {
this.user = userService.getUser();
   }

  ngOnInit() {
  }

  addBranch(branch: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(branch);

    this.http.post('http://localhost:51680/api/Branch', branch)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['services/'+this.route.snapshot.params['id']]);
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
