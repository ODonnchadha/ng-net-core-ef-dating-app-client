import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Photo } from 'src/app/_models/photo';
import { environment } from '../../../environments/environment';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  response: string;
  baseUrl = environment.apiUrl;
  currentMain: Photo;

  constructor(
    private alertify: AlertifyService,
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isDefault: res.isDefault
        };
        this.photos.push(photo);
      }
    };
  }

  setDefaultPhoto(photo: Photo) {
    const userId = this.authService.decodedToken.nameid;

    this.userService.setDefaultPhoto(userId, photo.id).subscribe(() => {
      this.currentMain = this.photos.filter(p => p.isDefault === true)[0];
      this.currentMain.isDefault = false;
      photo.isDefault = true;

      this.authService.changeMemberPhoto(photo.url);
      this.getMemberPhotoChange.emit(photo.url);
      // this.authService.currentUser.photoUrl = photo.url;
      // localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
    }, error => {
      this.alertify.error(error);
    });
  }

  deletePhoto(id: number) {
    this.alertify.confirm('Are you sure you want to delete this photo?', () => {
      // this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
      //   this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
      //   this.alertify.success('Photo has been deleted');
      // }, error => {
      //   this.alertify.error('Failed to delete the photo');
      // });
    });
  }
}
