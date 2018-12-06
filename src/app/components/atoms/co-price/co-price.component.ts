import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-price',
  templateUrl: './co-price.component.html',
  styleUrls: ['./co-price.component.scss']
})
export class CoPriceComponent implements OnInit {

  @Input() price:number;
  @Input() colored:boolean;
  @Input() size:string;
  priceRendered:string;

  constructor() {
    this.colored = false;
    this.size = 'small'
   }

   ngOnInit() {
    let price = typeof this.price == "string" ? parseInt(this.price).toFixed(2).toString() : this.price.toFixed(2).toString()
    this.priceRendered = price.replace(".", ",");
   }

}
