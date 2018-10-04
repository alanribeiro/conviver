import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-menu-items',
  templateUrl: './co-menu-items.component.html',
  styleUrls: ['./co-menu-items.component.scss']
})
export class CoMenuItemsComponent {

  @Input() itens:Array<string>;

  constructor() { }

}
