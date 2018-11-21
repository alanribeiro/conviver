import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'co-register-name',
  templateUrl: './co-register-name.component.html',
  styleUrls: ['./co-register-name.component.scss']
})
export class CoRegisterNameComponent implements OnChanges {

  @Input() error:boolean;
  @Output() validate:EventEmitter<any> = new EventEmitter();

  firstName:string;
  lastName:string;

  constructor() {
    this.error = false;
  }

  ngOnChanges() {
    if(this.error) {
      if(this.firstName == undefined) {
        this.firstName = "";
      }

      if(this.lastName == undefined) {
        this.lastName = "";
      }
    }
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

    if(this.firstName == "" || this.firstName == undefined || this.lastName == "" || this.lastName == undefined) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
