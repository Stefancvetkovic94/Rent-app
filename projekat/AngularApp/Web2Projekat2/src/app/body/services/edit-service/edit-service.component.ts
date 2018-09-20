import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';


@Injectable()
@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
   
  }

  EditService(service: any,form: NgForm) {
    console.log(service);
    
    service.Id=this.route.snapshot.params['id'];
    this.http.put('http://localhost:51680/api/Service/'+service.Id, service)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['/']);
      });
  }
}
