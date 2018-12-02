import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-description',
  templateUrl: './co-advertise-vacancy-description.component.html',
  styleUrls: ['./co-advertise-vacancy-description.component.scss']
})
export class CoAdvertiseVacancyDescriptionComponent {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  description:string;

  constructor() { }

  setDescription(value) {
    this.description = value;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      description: this.description
    };

    if(this.description == '' || this.description == undefined) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
