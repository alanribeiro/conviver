import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-rules',
  templateUrl: './co-advertise-vacancy-rules.component.html',
  styleUrls: ['./co-advertise-vacancy-rules.component.scss']
})
export class CoAdvertiseVacancyRulesComponent {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  rules:Array<{
    number:number,
    rule:string
  }>;

  constructor() {
    this.rules = [{number: undefined, rule: ''}];
  }

  setRule(index, value) {
    this.rules[index].number = index;
    this.rules[index].rule = value;
    this.validateSection();
  }

  addRule() {
    this.rules.push({number: undefined, rule: ''});
  }

  validateSection() {
    let data = {
      validate: true,
      rules: this.rules
    };

    this.validate.emit(data);
  }

}
