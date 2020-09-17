import { Component, Input, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from '../../_services/user.service';
import { Message } from '../../_models/message';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() recipientId: number;
  messages: Message[];
  message: any = {};

  constructor(
    private alertify: AlertifyService,
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const id = +this.authService.decodedToken.nameid;
    this.userService.getMessageThread(id, this.recipientId)
    .pipe(tap(messages => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].isRead === false && messages[i].recipientId === id) {
          this.userService.messageAsRead(id, messages[i].id);
        }
      }
    })).subscribe(messages => {
      this.messages = messages;
    }, error => {
      this.alertify.error(error);
    });
  }

  sendMessage() {
    const id = this.authService.decodedToken.nameid;
    this.message.recipientId = this.recipientId;
    this.userService.sendMessage(id, this.message).subscribe((m: Message) => {
      this.loadMessages();
      this.message = {};
    }, error => {
      this.alertify.error(error);
    });
  }

}
