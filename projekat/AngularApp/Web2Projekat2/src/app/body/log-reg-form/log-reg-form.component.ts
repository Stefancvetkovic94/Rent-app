import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel, FormsModule } from '@angular/forms';

import { User } from '../../model/user';

@Component({
  selector: 'app-log-reg-form',
  templateUrl: './log-reg-form.component.html',
  styleUrls: ['./log-reg-form.component.css']
})
export class LogRegFormComponent implements OnInit {

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
