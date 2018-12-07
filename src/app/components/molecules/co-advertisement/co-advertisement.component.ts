import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'co-advertisement',
  templateUrl: './co-advertisement.component.html',
  styleUrls: ['./co-advertisement.component.scss']
})

export class CoAdvertisementComponent implements OnChanges {

  @Input() advertisement: any;
  price:number;

  constructor() {
    this.price = 0;
  }

  ngOnChanges() {
    if(this.advertisement != undefined) {
      const rent = typeof this.advertisement.rent.value == "string" ? parseInt(this.advertisement.rent.value) : this.advertisement.rent.value;
      if(this.advertisement.expenses != undefined) {
        for(let i in this.advertisement.expenses) {
          const expense = typeof this.advertisement.expenses[i].value == "string" ? parseInt(this.advertisement.expenses[i].value) : this.advertisement.expenses[i].value;
          this.price += expense;
        }
        this.price += rent;
      }
      else this.price = rent;
    }
  }
}
