import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-establishment-item',
  templateUrl: './co-establishment-item.component.html',
  styleUrls: ['./co-establishment-item.component.scss']
})
export class CoEstablishmentItemComponent {

  @Input() icon: string;
  @Input() establishmentName: string;
  @Input() establishmentType: string;
  @Input() establishmentDistance: string;
  @Input() url: string;

  constructor() { }

}
