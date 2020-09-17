import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { TimeAgoExtendsPipe } from './_extensions/TimeAgoExtendsPipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    TimeAgoExtendsPipe,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberListComponent,
    MemberMessagesComponent,
    MessagesComponent,
    NavComponent,
    PhotoEditorComponent,
    RegisterComponent,
   ],
  imports: [
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:44362'],
        disallowedRoutes: ['localhost:44362/api/auth']
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FileUploadModule
  ],
  providers: [
    AlertifyService,
    AuthService,
    UserService,
    AuthGuard,
    PreventUnsavedChangesGuard,
    ErrorInterceptorProvider,
    ListsResolver,
    MemberDetailResolver,
    MemberEditResolver,
    MemberListResolver,
    MessagesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
