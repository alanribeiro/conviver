import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-selectable-item',
  templateUrl: './co-selectable-item.component.html',
  styleUrls: ['./co-selectable-item.component.scss']
})
export class CoSelectableItemComponent {
  @Input() size:string;
  @Input() title:string;
  @Input() icon:string;
  @Input() active:boolean;
  @Input() hoverMessage:string;
  @Output() changeActive:EventEmitter<any> = new EventEmitter();

  constructor() {
    this.active = false;
  }

  selectableToggle(){
    this.active = !this.active;
    this.changeActive.emit(this.active);
  }
}
