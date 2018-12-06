import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-menu-item',
  templateUrl: './co-menu-item.component.html',
  styleUrls: ['./co-menu-item.component.scss']
})
export class CoMenuItemComponent{

  @Input() title:string;
  @Input() withNotification:boolean;
  @Input() url:string;
  @Input() callback:string;

  @Output() openDropdown:EventEmitter<any> = new EventEmitter();

  constructor() {
    this.withNotification = false;
  }

  callbackFunction() {
    let that = this;
    eval("(" + this.callback + ")()");
  }

}
