import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-restrictions',
  templateUrl: './co-advertise-vacancy-restrictions.component.html',
  styleUrls: ['./co-advertise-vacancy-restrictions.component.scss']
})
export class CoAdvertiseVacancyRestrictionsComponent {

  @Input() restrictions:Array<any>;
  @Output() validate:EventEmitter<any> = new EventEmitter();

  selectedRestrictions:Array<string>;
  justBoys:boolean;
  justGirls:boolean;
  noRestrictionsChecked:boolean;

  constructor() {
    this.selectedRestrictions = [];
    this.justBoys = false;
    this.justGirls = false;
    this.noRestrictionsChecked = false;
  }

  setRestrictions(activing, restriction) {
    if(activing) {
      this.selectedRestrictions.push(restriction);

      if(this.noRestrictionsChecked) {
        this.noRestrictionsChecked = false;
      }

      if(restriction == 'Só meninos') {
        this.justBoys = true;
        if(this.justGirls) {
          let index = this.selectedRestrictions.indexOf('Só meninas');
          this.selectedRestrictions.splice(index, 1);
          this.justGirls = false;
        }
      }
      
      if(restriction == 'Só meninas') {
        this.justGirls = true;
        if(this.justBoys) {
          let index = this.selectedRestrictions.indexOf('Só meninos');
          this.selectedRestrictions.splice(index, 1);
          this.justBoys = false;
        }
      }
    }
    else {
      let index = this.selectedRestrictions.indexOf(restriction);
      this.selectedRestrictions.splice(index, 1);
    }

    this.validateSection();
  }

  noRestrictions(active) {
    if(active) {
      this.selectedRestrictions = [];
    }

    this.noRestrictionsChecked = active;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      restrictions: this.selectedRestrictions
    };

    if(this.selectedRestrictions.length == 0 && this.noRestrictionsChecked == false) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
