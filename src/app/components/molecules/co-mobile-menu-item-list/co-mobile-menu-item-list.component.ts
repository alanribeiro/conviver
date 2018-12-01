import { Component, Input } from '@angular/core';
import { InnerPopupComponent } from 'ng-zorro-antd/date-picker/lib/popups/inner-popup.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'co-mobile-menu-item-list',
  templateUrl: './co-mobile-menu-item-list.component.html',
  styleUrls: ['./co-mobile-menu-item-list.component.scss']
})
export class CoMobileMenuItemListComponent {

  @Input() isDropdown: boolean;

  @Input() items: Array<{
    title: string,
    icon: string,
    notifications: number,
    url: string}>;

  constructor() { }

}
