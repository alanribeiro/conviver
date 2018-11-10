import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'co-upload',
  templateUrl: './co-upload.component.html',
  styleUrls: ['./co-upload.component.scss']
})
export class CoUploadComponent {

  @Input() numberOfFiles:number;

  @Output() fileChange:EventEmitter<any> = new EventEmitter();

  fileList = [];
  previewImage = '';
  previewVisible = false;

  constructor() {
    this.numberOfFiles = 1;
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  sendFile() {
    this.fileChange.emit(this.fileList);
  }
}
