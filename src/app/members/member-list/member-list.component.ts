import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe((data => {
      const key = 'users';
      this.users = data[key].result;
    }));
  }

}
