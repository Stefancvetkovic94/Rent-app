import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';


@Injectable()
@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  editBranch(branch: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    branch.Id=this.route.snapshot.params['branchid'];
    console.log(branch);
    var id=this.route.snapshot.params['id'];
    this.http.put('http://localhost:51680/api/Branch/'+branch.Id, branch)
      .subscribe((data) => {
        console.log(data);

    this.router.navigate(['/services/'+id]);
      });
  }
}
