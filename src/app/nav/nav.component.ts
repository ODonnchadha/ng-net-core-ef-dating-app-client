import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public alertifyService: AlertifyService, public authService: AuthService) { }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.success('Logged in successfully');
    }, error => {
      this.alertifyService.error(error);
    });
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logOut();
    this.alertifyService.success('Logged out successfully');
  }

  ngOnInit() {
  }

}
