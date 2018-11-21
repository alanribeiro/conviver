import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-register-photo',
  templateUrl: './co-register-photo.component.html',
  styleUrls: ['./co-register-photo.component.scss']
})
export class CoRegisterPhotoComponent {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  photo:string;
  description:string;

  constructor() { }

  setPhoto(value) {
    this.photo = value[0];
    this.validateSecion();
  }

  setDescription(value) {
    this.description = value;
    this.validateSecion();
  }

  validateSecion() {
    let data = {
      validate: false,
      photo: this.photo,
      description: this.description
    }

    if(this.photo == undefined || this.description == undefined || this.description == "") {
      this.validate.emit(data);
      return;
    }
  
    data.validate = true;
    this.validate.emit(data); 
  }

}
