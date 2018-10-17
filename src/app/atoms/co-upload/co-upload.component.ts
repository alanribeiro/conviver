import { Component } from '@angular/core';

@Component({
  selector: 'co-upload',
  templateUrl: './co-upload.component.html',
  styleUrls: ['./co-upload.component.scss']
})
export class CoUploadComponent {
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage = '';
  previewVisible = false;

  constructor() {}
}
