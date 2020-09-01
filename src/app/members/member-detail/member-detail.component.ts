import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private userService: UserService) { }
  user: User;

  ngOnInit() {
    this.route.data.subscribe((data => {
      const key = 'user';
      this.user = data[key];
    }));
  }
}
