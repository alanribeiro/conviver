import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-mobile-menu-item',
  templateUrl: './co-mobile-menu-item.component.html',
  styleUrls: ['./co-mobile-menu-item.component.scss']
})
export class CoMobileMenuItemComponent {

  @Input() icon: string;
  @Input() notifications: number;
  @Input() title: string;
  @Input() url: string;

  constructor() {}

}
