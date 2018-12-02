import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-photos',
  templateUrl: './co-advertise-vacancy-photos.component.html',
  styleUrls: ['./co-advertise-vacancy-photos.component.scss']
})
export class CoAdvertiseVacancyPhotosComponent {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  photos:Array<any>;

  constructor() { }

  setPhotos(photos) {
    this.photos = photos;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      photos: this.photos
    };

    if(this.photos.length == 0) {
      this.validate.emit(data);
      return;
    }
    data.validate = true;
    this.validate.emit(data);
  }

}
