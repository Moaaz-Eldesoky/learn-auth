import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  isLoading: boolean = false;
  constructor(private router: Router, private auth: AuthService) {}
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.pattern(/^[a-z0-9]{5,10}$/),
      Validators.required,
    ]),
  });

  handleRegister(registerForm: FormGroup) {
    this.isLoading = true;
    this.auth
      .register(registerForm.value.email, registerForm.value.password)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.token) {
            console.log(response);
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },
      });
  }

  close() {
    this.router.navigate(['/']);
  }
}
