import {Injectable} from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static user: User;

  constructor() {
  }

  getUser() {
    return UserService.user;
  }

  setUser(user: User) {
    user = new User();

    user.email = user.email;
    user.password = user.password;
    user.token = user.token;
    user.type = user.type;
  }
}
