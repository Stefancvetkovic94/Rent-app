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


const appRoutes: Routes = [
  { path: '', component: ServicesComponent },                             // Home-Services
  { path: 'login', component: LogRegFormComponent },                      // Login and Register
  { path: 'services', component: ServicesComponent },                     // Home-Services
  { path: 'services/:id', component: ServiceComponent },                  // Service, List Vehicles
  { path: 'services/:id/reservation', component: ReservationComponent },  // Service/Vehicle, vehicle reservation
  { path: 'services/:id/vehicle', component: ServiceComponent },       // Service/Vehicle, One vehicle
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
