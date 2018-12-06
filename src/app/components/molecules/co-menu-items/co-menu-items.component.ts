import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-menu-items',
  templateUrl: './co-menu-items.component.html',
  styleUrls: ['./co-menu-items.component.scss']
})
export class CoMenuItemsComponent {

  @Input() items:Array<any>;
  @Output() openDropdown:EventEmitter<any> = new EventEmitter();

  constructor() { }

  toggleDropdown(dropdown) {
    this.openDropdown.emit(dropdown);
  }

}
