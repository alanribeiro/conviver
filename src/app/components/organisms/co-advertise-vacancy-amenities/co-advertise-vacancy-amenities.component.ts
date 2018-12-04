import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-amenities',
  templateUrl: './co-advertise-vacancy-amenities.component.html',
  styleUrls: ['./co-advertise-vacancy-amenities.component.scss']
})
export class CoAdvertiseVacancyAmenitiesComponent {

  @Input() amenities:Array<any>;
  @Output() validate:EventEmitter<any> = new EventEmitter();

  selectedAmenities:Array<string>;
  noAmenitiesChecked:boolean;

  constructor() {
    this.selectedAmenities = [];
    this.noAmenitiesChecked = false;
  }

  setAmenities(activing, amenitie) {
    if(activing) {
      this.selectedAmenities.push(amenitie);
      if(this.noAmenitiesChecked) {
        this.noAmenitiesChecked = false;
      }
    }
    else {
      let index = this.selectedAmenities.indexOf(amenitie);
      this.selectedAmenities.splice(index, 1);
    }

    this.validateSection();
  }

  noAmenities(active) {
    if(active) {
      this.selectedAmenities = [];
    }

    this.noAmenitiesChecked = active;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      amenities: this.selectedAmenities
    };

    if(this.selectedAmenities.length == 0 && this.noAmenitiesChecked == false) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }


}
