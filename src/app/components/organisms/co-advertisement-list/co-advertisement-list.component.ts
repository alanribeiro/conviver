import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertisement-list',
  templateUrl: './co-advertisement-list.component.html',
  styleUrls: ['./co-advertisement-list.component.scss']
})
export class CoAdvertisementListComponent {

  @Input() itemsList: Array<{advertisement: Object}>;

  constructor() { }

}
