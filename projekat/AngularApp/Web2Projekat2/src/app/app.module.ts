import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LogRegFormComponent } from './body/log-reg-form/log-reg-form.component';
import { ModelComponent } from './model/model.component';
import { LoginComponent } from './body/log-reg-form/login/login.component';
import { RegisterComponent } from './body/log-reg-form/register/register.component';
import { ServicesComponent } from './body/services/services.component';
import { ServiceComponent } from './body/services/service/service.component';
import { VehicleComponent } from './body/services/service/vehicle/vehicle.component';
import { ReservationComponent } from './body/services/service/reservation/reservation.component';
import { AddServiceComponent} from './body/services/add-service/add-service.component';
import { AddVehicleComponent } from './body/services/add-vehicle/add-vehicle.component';
import { AddReservationComponent } from './body/services/add-reservation/add-reservation.component';
import { EditVehicleComponent } from './body/services/edit-vehicle/edit-vehicle.component';
import { EditServiceComponent } from './body/services/edit-service/edit-service.component';
import { BranchComponent } from './body/services/branch/branch.component';
import { AddBranchComponent } from './body/services/add-branch/add-branch.component';
import { EditBranchComponent } from './body/services/edit-branch/edit-branch.component'


const appRoutes: Routes = [
  { path: '', component: ServicesComponent },                             // Home-Services
  { path: 'login', component: LogRegFormComponent },                      // Login and Register
  { path: 'services', component: ServicesComponent },                     // Home-Services
  { path: 'services/add-service', component: AddServiceComponent },
  { path: 'services/edit-service', component: EditServiceComponent},       // Add-Services
  { path: 'services/:id', component: ServiceComponent },     
  { path: 'services/:id/add-branch', component: AddBranchComponent },             // Service, List Vehicles
  { path: 'services/:id/edit-branch', component: EditBranchComponent },
  { path: 'services/:id/reservation', component: ReservationComponent },  // Service/Vehicle, vehicle reservation
  { path: 'services/:id/add-vehicle', component: AddVehicleComponent },   //Service/AddVehicle
  { path: 'services/:id/add-reservation', component: AddReservationComponent},//Service/AddReservation
  { path: 'services/:id/edit-vehicle', component: EditVehicleComponent},   //Service/EditVehicle 
  { path: 'services/:id/:vehicleId', component: VehicleComponent },       // Service/Vehicle, One vehicle
  { path: 'services/:id/:branches', component: BranchComponent },
   
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LogRegFormComponent,
    ModelComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    ServiceComponent,
    VehicleComponent,
    ReservationComponent,
    AddServiceComponent,
    AddVehicleComponent,
    AddReservationComponent,
    EditVehicleComponent,
    EditServiceComponent,
    BranchComponent,
    AddBranchComponent,
    EditBranchComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
