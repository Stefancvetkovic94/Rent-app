import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

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
}
