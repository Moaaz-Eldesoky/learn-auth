import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}
  login(username: string, pass: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      email: username,
      password: pass,
    });
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAuth(): boolean {
    return !!localStorage.getItem('token');
  }
}
