import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../_models/message';
import { PaginatedResult, Pagination } from '../_models/Pagination';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  pagination: Pagination;
  messageContainer = 'Unread';

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.messages = data['messages'].result;
      this.pagination = data['messages'].pagination;
    });
  }

  loadMessages() {
    const id = this.authService.decodedToken.nameid;
    this.userService.getMessages(id, this.pagination.currentPage, this.pagination.itemsPerPage,
      this.messageContainer).subscribe((response: PaginatedResult<Message[]>) => {
        this.messages = response.result;
        this.pagination = response.pagination;
      }, error => {
        this.alertify.error(error);
    });
  }

  pageChanges(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadMessages();
  }

}
