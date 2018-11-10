import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-input',
  templateUrl: './co-input.component.html',
  styleUrls: ['./co-input.component.scss']
})
export class CoInputComponent {

  @Input() type: string;
  @Input() placeholder: string;
  @Input() error: boolean;
  @Input() fullWidth: boolean;
  @Input() margin: boolean;

  @Output() valueChange:EventEmitter<any> = new EventEmitter();

  value:string;

  constructor() {
    this.type = 'text';
    this.error = false;
    this.fullWidth = false;
    this.margin = false;
  }

  sendValue() {
    this.valueChange.emit(this.value);
  }

}
