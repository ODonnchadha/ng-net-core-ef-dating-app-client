import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(
    private alertifyService: AlertifyService,
    private authService: AuthService,
    private builder: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.builder.group({
      gender: ['male'],
      username: ['', [Validators.required]],
      knownAs: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value ===
      g.get('confirmPassword').value ? null : {mismatch: true};
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
