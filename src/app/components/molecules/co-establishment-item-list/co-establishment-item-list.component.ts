import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-establishment-item-list',
  templateUrl: './co-establishment-item-list.component.html',
  styleUrls: ['./co-establishment-item-list.component.scss']
})
export class CoEstablishmentItemListComponent {

  @Input() itemsList: Array<{
    icon: string,
    establishmentType: string,
    establishmentName: string,
    establishmentDistance: string,
    url: string}>;

  constructor() { }

}
