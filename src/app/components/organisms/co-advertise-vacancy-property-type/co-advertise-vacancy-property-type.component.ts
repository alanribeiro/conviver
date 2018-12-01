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
      this.changeType.emit(this.propertyType);
      return;
    }

    this.propertyType = '';
    this.changeType.emit(this.propertyType);
  }

}
