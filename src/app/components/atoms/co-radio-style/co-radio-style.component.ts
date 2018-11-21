import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'co-radio-style',
  templateUrl: './co-radio-style.component.html',
  styleUrls: ['./co-radio-style.component.scss']
})
export class CoRadioStyleComponent implements OnInit {

  @Input() options:Array<{label:string, value:string}>;
  @Output() valueChange:EventEmitter<any> = new EventEmitter();

  value:string;

  constructor() { }

  ngOnInit() {
    this.value = this.options[0].value;
    this.sendValue();
  }

  sendValue() {
    this.valueChange.emit(this.value);
  }

}
