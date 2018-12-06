import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-mobile-menu-item-list',
  templateUrl: './co-mobile-menu-item-list.component.html',
  styleUrls: ['./co-mobile-menu-item-list.component.scss']
})
export class CoMobileMenuItemListComponent {

  @Input() items: Array<any>;

  constructor() {}

}
