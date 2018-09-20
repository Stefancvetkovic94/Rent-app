import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel, FormsModule } from '@angular/forms';

import { User } from '../../model/user';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-log-reg-form',
  templateUrl: './log-reg-form.component.html',
  styleUrls: ['./log-reg-form.component.css']
})
export class LogRegFormComponent implements OnInit {


  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }
}
