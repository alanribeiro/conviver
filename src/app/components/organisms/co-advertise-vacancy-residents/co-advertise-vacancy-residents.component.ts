import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-residents',
  templateUrl: './co-advertise-vacancy-residents.component.html',
  styleUrls: ['./co-advertise-vacancy-residents.component.scss']
})
export class CoAdvertiseVacancyResidentsComponent {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  numberOfResidents:number;
  numberOfPlaces:number;

  constructor() {
    this.numberOfResidents = 0;
    this.numberOfPlaces = 0;
  }

  setNumberOfResidents(value) {
    this.numberOfResidents = value;
    this.validateSection();
  }

  setNumberOfPlaces(value) {
    this.numberOfPlaces = value;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      numberOfResidents: this.numberOfResidents,
      numberOfPlaces: this.numberOfPlaces
    };

    if(this.numberOfPlaces == 0) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
