import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

// todo: on App start check user on signed up/in

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() {
    // Auth.currentUserInfo().then((info) => console.log(info));
    Auth.currentSession().then((info) => console.log(info));
  }

  isRegistered = false;
  isRegistrationConfirmed = false;
  isLoggedIn = false;

  redirectUrl: string;
  username: string;

  async register({username, password}: any) {
    try {
      await Auth.signUp({
        username,
        password
      });

      this.isRegistered = true;
      this.username = username;
    } catch (error) {
      // todo: user exists
      console.log('error signing up:', error);
    }
  }

  async confirmRegistration({ code }: any) {
    try {
      await Auth.confirmSignUp(this.username, code);
      this.isRegistrationConfirmed = true;
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async login({ username, password }: any) {
    try {
      const data = await Auth.signIn(username, password);
      console.log(data);
      this.isLoggedIn = true;
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  async logout() {
    try {
      await Auth.signOut();
      this.isLoggedIn = false;
      // Auth.currentSession().then((info) => console.log(info));
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
