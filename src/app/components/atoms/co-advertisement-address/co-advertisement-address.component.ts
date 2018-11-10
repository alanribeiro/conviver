import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertisement-address',
  templateUrl: './co-advertisement-address.component.html',
  styleUrls: ['./co-advertisement-address.component.scss']
})

export class CoAdvertisementAddressComponent {

  @Input() city:string;
  @Input() state:string;
  @Input() country:string;

  constructor() {}

}
