import { Component, Input, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from '../../_services/user.service';
import { Message } from '../../_models/message';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.scss']
})
export class MemberMessagesComponent implements OnInit {
  @Input() recipientId: number;
  messages: Message[];

  constructor(
    private alertify: AlertifyService,
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const id = this.authService.decodedToken.nameid;
    this.userService.getMessageThread(id, this.recipientId).subscribe(messages => {
      this.messages = messages;
    }, error => {
      this.alertify.error(error);
    });
  }

}
