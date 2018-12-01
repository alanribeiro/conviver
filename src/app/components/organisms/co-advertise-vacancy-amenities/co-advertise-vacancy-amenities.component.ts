import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-amenities',
  templateUrl: './co-advertise-vacancy-amenities.component.html',
  styleUrls: ['./co-advertise-vacancy-amenities.component.scss']
})
export class CoAdvertiseVacancyAmenitiesComponent {

  @Input() amenities:Array<any>;

  constructor() { }

}
