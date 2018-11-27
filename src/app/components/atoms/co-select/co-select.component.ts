import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-select',
  templateUrl: './co-select.component.html',
  styleUrls: ['./co-select.component.scss']
})
export class CoSelectComponent {

  @Input() placeholder:string;
  @Input() options:Array<{value:string, label:string}>;
  @Input() fullWidth:boolean;
  @Input() margin:boolean;
  @Input() error:boolean;
  
  @Output() valueChange:EventEmitter<any> = new EventEmitter();

  selectedValue:string;

  constructor() {
    this.fullWidth = false;
    this.margin = false;
    this.error = false;
  }

  sendValue() {
    this.valueChange.emit(this.selectedValue);
  }

}
