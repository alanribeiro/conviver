import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-register-name',
  templateUrl: './co-register-name.component.html',
  styleUrls: ['./co-register-name.component.scss']
})
export class CoRegisterNameComponent {

  @Input() wrongFields:Array<string>;
  @Output() validate:EventEmitter<any> = new EventEmitter();

  firstName:string;
  lastName:string;

  constructor() {
    // this.wrongFields = [];
  }

  setFirstName(value:string) {
    this.firstName = value;
    this.validateSection();
  }

  setLastName(value:string) {
    this.lastName = value;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      firstName: this.firstName,
      lastName: this.lastName
    }
    if(this.firstName == undefined || this.firstName == "" || this.lastName == undefined || this.lastName == "") {
      this.validate.emit(data);
      return;
    }
    data.validate = true;
    this.validate.emit(data);
  }

}
