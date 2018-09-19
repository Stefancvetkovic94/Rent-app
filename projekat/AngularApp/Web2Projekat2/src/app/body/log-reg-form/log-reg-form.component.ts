import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel, FormsModule } from '@angular/forms';

import { User } from '../../model/user';

@Component({
  selector: 'app-log-reg-form',
  templateUrl: './log-reg-form.component.html',
  styleUrls: ['./log-reg-form.component.css']
})
export class LogRegFormComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  register(user: any, form: NgForm) {
    console.log('Uspesan ulazak u registraciju....');
    console.log(user);
    console.log(form);
  }
}
