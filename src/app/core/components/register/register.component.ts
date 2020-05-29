import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../../auth/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthServiceService) { }

  registerForm: FormGroup;
  confirmationForm: FormGroup;
  registerFormIsSubmitted = false;
  confirmationFormIsSubmitted = false;

  isRegistered = this.authService.isRegistered;
  isRegistrationConfirmed = this.authService.isRegistrationConfirmed;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    }, {
      updateOn: 'submit',
    });

    this.confirmationForm = this.fb.group({
      code: [null, [Validators.required]]
    }, {
      updateOn: 'submit',
    });
  }

  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get code() { return this.registerForm.get('code'); }

  onSubmitRegistration() {
    this.registerFormIsSubmitted = true;
    if (!this.registerForm.valid) {
      return;
    }

    this.authService.register(this.registerForm.value)
      .then(() => {
        this.isRegistered = true;
      });
  }

  onSubmitConfirmation() {
    this.confirmationFormIsSubmitted = true;
    if (!this.confirmationForm.valid) {
      return;
    }

    this.authService.confirmRegistration(this.confirmationForm.value).then(() => {
      this.isRegistrationConfirmed = true;
    });
  }
}
