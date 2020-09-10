import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  regsiterForm: FormGroup;

  constructor(private alertifyService: AlertifyService, private authService: AuthService) { }

  ngOnInit() {
    this.regsiterForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  register() {
    // this.authService.register(this.model).subscribe( () => {
    //   this.alertifyService.success('Registered successful');
    // }, error => {
    //   this.alertifyService.error(error);
    // });
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertifyService.message('Registration cancelled');
  }
}
