import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-appliances',
  templateUrl: './co-advertise-vacancy-appliances.component.html',
  styleUrls: ['./co-advertise-vacancy-appliances.component.scss']
})
export class CoAdvertiseVacancyAppliancesComponent {

  @Input() appliances:Array<any>;
  @Output() validate:EventEmitter<any> = new EventEmitter();

  selectedAppliances:Array<string>;
  noAppliancesChecked:boolean;

  constructor() {
    this.selectedAppliances = [];
    this.noAppliancesChecked = false;
  }

  setAppliances(activing, appliance) {
    if(activing) {
      this.selectedAppliances.push(appliance);
      if(this.noAppliancesChecked) {
        this.noAppliancesChecked = false;
      }
    }
    else {
      let index = this.selectedAppliances.indexOf(appliance);
      this.selectedAppliances.splice(index, 1);
    }

    this.validateSection();
  }

  noAppliances(active) {
    if(active) {
      this.selectedAppliances = [];
    }

    this.noAppliancesChecked = active;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      appliances: this.selectedAppliances
    };

    if(this.selectedAppliances.length == 0 && this.noAppliancesChecked == false) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
