import { Component } from '@angular/core';

@Component({
  selector: 'co-upload',
  templateUrl: './co-upload.component.html',
  styleUrls: ['./co-upload.component.scss']
})
export class CoUploadComponent {
  fileList = [
    {}
  ];
  previewImage = '';
  previewVisible = false;

  constructor() {}
}
