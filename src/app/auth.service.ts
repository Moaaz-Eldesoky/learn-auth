import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // userData = null;
  private apiUrl = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      email: email,
      password: password,
    });
  }
  register(email: string, pass: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      email: email,
      password: pass,
    });
  }
  logout() {
    localStorage.removeItem('userToken');
  }
  isAuth(): boolean {
    return !!localStorage.getItem('userToken');
  }
  // decodeToken() {
  //   const incodedToken = JSON.stringify(localStorage.getItem('userToken'));
  //   const decodedToken = jwtDecode(incodedToken);
  //   console.log(decodedToken);
  //   this.userData != decodedToken;
  // }
}
