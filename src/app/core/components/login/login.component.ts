import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthServiceService } from '../../auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthServiceService, public router: Router, private fb: FormBuilder) {
  }

  loginForm: FormGroup;
  loginFormIsSubmitted = false;

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    }, {
      updateOn: 'submit',
    });
  }

  login() {
    this.loginFormIsSubmitted = true;
    if (!this.loginForm.valid) {
      return;
    }

    this.authService.login(this.loginForm.value)
      .then(() => {
        const urlToRedirect = this.authService.redirectUrl || '/';
        this.router.navigate([urlToRedirect]);
      });
  }

  logout() {
    this.authService.logout();
    // todo: redirect somewhere?
  }
}
