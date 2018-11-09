import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  isUserLoggedIn = false;

  userInfo: any = {};

  constructor() {

  }

}
