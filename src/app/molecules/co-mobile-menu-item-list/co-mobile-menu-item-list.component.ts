import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'co-mobile-menu-item-list',
  templateUrl: './co-mobile-menu-item-list.component.html',
  styleUrls: ['./co-mobile-menu-item-list.component.scss']
})
export class CoMobileMenuItemListComponent {

  @Input() items: Array<{
    title: string,
    icon: string,
    notifications: number,
    url: string}>;

  constructor() { }

}
