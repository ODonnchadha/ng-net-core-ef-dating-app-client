import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() v: any;
  model: any = {};

  constructor() { }

  register() { }

  cancel() { }

  ngOnInit() {
  }
}
