import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-rate',
  templateUrl: './co-rate.component.html',
  styleUrls: ['./co-rate.component.scss']
})
export class CoRateComponent {

  @Input() rate:number;

  constructor() {}

}
