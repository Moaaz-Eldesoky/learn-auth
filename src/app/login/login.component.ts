import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
AuthService;

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isloading: boolean = false;
  constructor(private router: Router, private Auth: AuthService) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  handleLogin(loginForm: FormGroup) {
    this.isloading = true;
    this.Auth.login(loginForm.value.email, loginForm.value.password).subscribe({
      next: (response) => {
        localStorage.setItem('userToken', response.token);
        // this.Auth.decodeToken();
        this.isloading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);
        this.isloading = false;
      },
    });
  }

  close() {
    this.router.navigate(['/']);
  }
}
