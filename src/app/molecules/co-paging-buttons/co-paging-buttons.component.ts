import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-paging-buttons',
  templateUrl: './co-paging-buttons.component.html',
  styleUrls: ['./co-paging-buttons.component.scss']
})
export class CoPagingButtonsComponent {

  @Input() next:boolean;
  @Input() back:boolean;
  @Input() done:boolean;

  constructor() {
    this.next = false;
    this.back = false;
    this.done = false;
  }

}
