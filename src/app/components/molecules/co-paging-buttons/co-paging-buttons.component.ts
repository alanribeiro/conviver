import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-paging-buttons',
  templateUrl: './co-paging-buttons.component.html',
  styleUrls: ['./co-paging-buttons.component.scss']
})
export class CoPagingButtonsComponent {

  @Input() next:boolean;
  @Input() back:boolean;
  @Input() done:boolean;

  @Output() clickedNext:EventEmitter<any> = new EventEmitter();
  @Output() clickedBack:EventEmitter<any> = new EventEmitter();
  @Output() clickedDone:EventEmitter<any> = new EventEmitter();

  constructor() {
    this.next = false;
    this.back = false;
    this.done = false;
  }

  nextSection() {
    if(this.done) {
      this.clickedDone.emit();
      return;
    }
    this.clickedNext.emit();
  }

  previousSection() {
    this.clickedBack.emit();
  }

}
