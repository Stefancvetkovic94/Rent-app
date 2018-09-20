import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { Branch } from '../../../model/branch';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
branch: Branch=new Branch();
  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  
  ngOnInit() {
    this.route = this.route.snapshot.params['id'];
  }
  

}
