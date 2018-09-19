import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LogRegFormComponent } from './body/log-reg-form/log-reg-form.component';
import { ModelComponent } from './model/model.component';
import { LoginComponent } from './body/log-reg-form/login/login.component';
import { RegisterComponent } from './body/log-reg-form/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LogRegFormComponent,
    ModelComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
