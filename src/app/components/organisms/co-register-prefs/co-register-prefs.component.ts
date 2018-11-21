import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-register-prefs',
  templateUrl: './co-register-prefs.component.html',
  styleUrls: ['./co-register-prefs.component.scss']
})
export class CoRegisterPrefsComponent {

  @Input() list:Array<{title:string, icon:string}>
  @Output() validate:EventEmitter<any> = new EventEmitter();

  preferences:Array<string>;

  constructor() {
    this.preferences = [];
  }

  setPreferences(value) {
    if(this.preferences.includes(value)) {
      let index = this.preferences.indexOf(value);
      this.preferences.splice(index, 1);
      this.validateSection();
      return;
    }

    this.preferences.push(value);
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      personality: this.preferences
    }
    if(this.preferences.length == 0) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
