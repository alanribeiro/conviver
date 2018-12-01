import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-restrictions',
  templateUrl: './co-advertise-vacancy-restrictions.component.html',
  styleUrls: ['./co-advertise-vacancy-restrictions.component.scss']
})
export class CoAdvertiseVacancyRestrictionsComponent {

  @Input() restrictions:Array<any>;

  constructor() { }

}
