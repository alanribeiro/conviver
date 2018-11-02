import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertisement-additional-info',
  templateUrl: './co-advertisement-additional-info.component.html',
  styleUrls: ['./co-advertisement-additional-info.component.scss']
})

export class CoAdvertisementAdditionalInfoComponent {

  @Input() propertyType:string;
  @Input() numberOfPlaces:number;

  constructor() {
    this.numberOfPlaces = 1;
  }

}
