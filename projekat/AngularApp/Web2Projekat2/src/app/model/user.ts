export class User {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public birthDate: Date;
  public token: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.token = '';
  }


}
