import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logUserOut() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
