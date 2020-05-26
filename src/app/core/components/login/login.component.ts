import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthServiceService, public router: Router) {
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const urlToRedirect = this.authService.redirectUrl || '/';
        this.router.navigate([urlToRedirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
