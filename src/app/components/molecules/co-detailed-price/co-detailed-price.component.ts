import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-detailed-price',
  templateUrl: './co-detailed-price.component.html',
  styleUrls: ['./co-detailed-price.component.scss']
})
export class CoDetailedPriceComponent implements OnInit {

  @Input() rent:{value:number, waterAndElectricityIncluded:boolean};
  @Input() expenses:Array<any>;

  total:number;

  constructor() { }

  ngOnInit() {
    this.total = this.rent.value;
    for(let i in this.expenses) {
      this.total += this.expenses[i].value;
    }
  }

}
