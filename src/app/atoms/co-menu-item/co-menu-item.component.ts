import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-menu-item',
  templateUrl: './co-menu-item.component.html',
  styleUrls: ['./co-menu-item.component.scss']
})
export class CoMenuItemComponent{

  @Input() title:string;
  @Input() withNotification:boolean;

  constructor() {
    this.withNotification = false;
  }

}
