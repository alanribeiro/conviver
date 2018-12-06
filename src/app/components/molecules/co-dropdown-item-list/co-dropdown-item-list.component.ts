import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-dropdown-item-list',
  templateUrl: './co-dropdown-item-list.component.html',
  styleUrls: ['./co-dropdown-item-list.component.scss']
})
export class CoDropdownItemListComponent {

  @Input() items: Array<any>;

  constructor() { }

}
