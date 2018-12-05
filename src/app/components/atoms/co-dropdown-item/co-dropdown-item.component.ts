import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-dropdown-item',
  templateUrl: './co-dropdown-item.component.html',
  styleUrls: ['./co-dropdown-item.component.scss']
})
export class CoDropdownItemComponent {

  @Input() icon: string;
  @Input() title: string;
  @Input() url: string;
  @Input() callback: string;

  constructor() { }

  callbackFunction() {
    eval("(" + this.callback + ")()");
  }

}
