import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  TOKEN = 'token';
  baseUrl = 'https://localhost:44362/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  init() {
    const token = localStorage.getItem(this.TOKEN);
    if (token) {
      this.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  isLoggedIn() {
    const token = localStorage.getItem(this.TOKEN);
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem(this.TOKEN, user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
          }
        })
      );
  }

  logOut() {
    localStorage.removeItem(this.TOKEN);
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
