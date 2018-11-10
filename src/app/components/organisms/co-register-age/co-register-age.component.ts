import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-register-age',
  templateUrl: './co-register-age.component.html',
  styleUrls: ['./co-register-age.component.scss']
})
export class CoRegisterAgeComponent {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  age:number;
  genre:string;

  constructor() { }

  setAge(value) {
    this.age = value;
    this.validateSection();
  }

  setGenre(value) {
    this.genre = value;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      age: this.age,
      genre: this.genre
    }

    if(this.age == undefined) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
