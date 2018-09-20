import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../../custom-services/UserService';
import { User } from '../../../model/user';


@Injectable()
@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  user: User = new User();
  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute,userService: UserService) {
    this.user = userService.getUser();
   }

  ngOnInit() {

  }
  editBranch(branch: any, form: NgForm) {
    console.log('Uspesno izmenjen' + branch);
    branch.Id = this.route.snapshot.params['branchid'];
    var id = this.route.snapshot.params['id'];
    this.http.put('http://localhost:51680/api/Branch/' + branch.Id, branch)
      .subscribe((data) => {

    this.router.navigate(['/services/' + id]);
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
