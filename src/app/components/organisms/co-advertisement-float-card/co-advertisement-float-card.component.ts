import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertisement-float-card',
  templateUrl: './co-advertisement-float-card.component.html',
  styleUrls: ['./co-advertisement-float-card.component.scss']
})
export class CoAdvertisementFloatCardComponent {

  @Input() price:number;
  @Input() address:string;
  @Input() propertyType:string;
  @Input() numberOfResidents:number;
  @Input() numberOfPlaces:number;
  @Input() restrictions:Array<string>;
  @Input() rate:number;

  constructor() { }

}
