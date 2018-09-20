import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';



@Injectable()
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

 services: Service[]= []

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { 
    
  }
  GetServices() {
    this.http.get('http://localhost:51680/api/Service')
      .subscribe((data:Map<number,Service>) => {
        console.log(data); 
        var i=0;
        data.forEach(element => {
console.log(element);
         
          this.services[i]= new Service();
          this.services[i].Branches=element.Branches;
          this.services[i].Id=element.Id;
          this.services[i].Description=element.Description;
          this.services[i].Email=element.Email;
          this.services[i].LogoUrl=element.LogoUrl;
          this.services[i].Name=element.Name;
          this.services[i].Approved=element.Approved;
          this.services[i].Ratings=element.Ratings;
          this.services[i].Vehicles=element.Vehicles;

          console.log(this.services[i]);
          i++;
        });
        
      });
  }
  DeleteService(id: number)
{
  console.log(id);
  this.http.delete('http://localhost:51680/api/Service/' + id).subscribe(()=>{     
    while(this.services.length>0)
    {
      this.services.pop();
    }
    this.GetServices();
  });
} 

  ngOnInit() {
 this.GetServices()
  }
  addVehicle(service: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(service);

    this.http.post('http://localhost:51680/api/Service', service)
      .subscribe((data) => {
        console.log(data);
        

        this.router.navigate(['services/'+this.route.snapshot.params['id']]);
      });
 }
}
