import { Component } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-price',
  templateUrl: './co-advertise-vacancy-price.component.html',
  styleUrls: ['./co-advertise-vacancy-price.component.scss']
})
export class CoAdvertiseVacancyPriceComponent {

  expenses:Array<{name:string, value:number}>;

  constructor() {
    this.expenses = [];
  }

  addExpense() {
    this.expenses.push({name: '', value: undefined});
  }

  setExpenseName(index, name) {
    this.expenses[index].name = name;
  }

  setExpenseValue(index, value) {
    this.expenses[index].value = value;
  }

}
