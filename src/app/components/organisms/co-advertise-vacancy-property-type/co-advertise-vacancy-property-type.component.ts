import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-property-type',
  templateUrl: './co-advertise-vacancy-property-type.component.html',
  styleUrls: ['./co-advertise-vacancy-property-type.component.scss']
})
export class CoAdvertiseVacancyPropertyTypeComponent {

  @Output() changeType:EventEmitter<any> = new EventEmitter();

  propertyType:string;

  constructor() { }

  changePropertyType(activating, value) {
    if(activating) {
      this.propertyType = value;
    }
    else {
      this.propertyType = '';
    }

    let data = {validate: activating, propertyType: this.propertyType};
    this.changeType.emit(data);
  }

}
