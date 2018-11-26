import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-rooms',
  templateUrl: './co-advertise-vacancy-rooms.component.html',
  styleUrls: ['./co-advertise-vacancy-rooms.component.scss']
})
export class CoAdvertiseVacancyRoomsComponent {

  @Input() rooms:Array<any>;

  constructor() { }

}
