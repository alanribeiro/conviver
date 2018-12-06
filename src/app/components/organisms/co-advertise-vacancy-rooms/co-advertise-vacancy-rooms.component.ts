import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-rooms',
  templateUrl: './co-advertise-vacancy-rooms.component.html',
  styleUrls: ['./co-advertise-vacancy-rooms.component.scss']
})
export class CoAdvertiseVacancyRoomsComponent {

  @Input() rooms:Array<any>;
  @Output() validate:EventEmitter<any> = new EventEmitter();

  selectedRooms:Array<string>;

  constructor() {
    this.selectedRooms = [];
  }

  setRooms(activing, room) {
    if(activing) {
      this.selectedRooms.push(room);
    }
    else {
      let index = this.selectedRooms.indexOf(room);
      this.selectedRooms.splice(index, 1);
    }

    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      rooms: this.selectedRooms
    };

    if(this.selectedRooms.length == 0) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
