import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  EditVehicle(vehicle: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(vehicle);
  vehicle.Id=this.route.snapshot.params['vehicleid'];
  var id= this.route.snapshot.params['id']
    this.http.post('http://localhost:51680/api/Vehicle/'+vehicle.Id, vehicle)
      .subscribe((data) => {
        console.log(data);


        this.router.navigate(['/services/'+id]);
      });
}

}
