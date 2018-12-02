import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-price',
  templateUrl: './co-advertise-vacancy-price.component.html',
  styleUrls: ['./co-advertise-vacancy-price.component.scss']
})
export class CoAdvertiseVacancyPriceComponent {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  rent:{
    value:number,
    waterAndElectricityIncluded:boolean
  };
  expenses:Array<{name:string, value:number}>;

  constructor() {
    this.rent = {
      value: undefined,
      waterAndElectricityIncluded: false
    }
    this.expenses = [];
  }

  setRent(value) {
    this.rent.value = value;
    this.validateSection();
  }

  setWaterAndElectricityIncluded(value) {
    this.rent.waterAndElectricityIncluded = value;
    this.validateSection();
  }

  addExpense() {
    this.expenses.push({name: '', value: undefined});
  }

  setExpenseName(index, name) {
    this.expenses[index].name = name;
    this.validateSection();
  }

  setExpenseValue(index, value) {
    this.expenses[index].value = value;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      rent: this.rent,
      expenses: this.expenses
    };

    if(this.rent.value == undefined) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

}
