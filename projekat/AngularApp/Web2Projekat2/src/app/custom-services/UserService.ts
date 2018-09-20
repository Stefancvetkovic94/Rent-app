import {Injectable} from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() {
  }

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user.password = user.password;
    this.user.email = user.email;
    this.user.token = user.token;
    this.user.type = user.type;
    console.log(user);
    console.log(this.user);
  }
}
