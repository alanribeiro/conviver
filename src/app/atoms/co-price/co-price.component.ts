import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-price',
  templateUrl: './co-price.component.html',
  styleUrls: ['./co-price.component.scss']
})
export class CoPriceComponent {

  @Input() price:number;
  @Input() colored:boolean;
  @Input() size:string;

  constructor() {
    this.colored = false;
    this.size = 'small'
   }

}
