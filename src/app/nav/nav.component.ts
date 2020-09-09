import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(
    public alertifyService: AlertifyService,
    public authService: AuthService,
    private router: Router) { }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.success('Login successful');
    }, error => {
      this.alertifyService.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logOut();
    this.alertifyService.message('Logout successful');
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => {
      this.photoUrl = photoUrl;
    });
  }

}
