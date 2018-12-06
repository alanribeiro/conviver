import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-checkbox',
  templateUrl: './co-checkbox.component.html',
  styleUrls: ['./co-checkbox.component.scss']
})
export class CoCheckboxComponent {
  @Input() title:string;
  @Input() checked:boolean;
  @Output() check:EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.checked = false;
  }

  sendValue() {
    this.check.emit(this.checked);
  }

}
