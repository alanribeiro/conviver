import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-number-picker',
  templateUrl: './co-number-picker.component.html',
  styleUrls: ['./co-number-picker.component.scss']
})
export class CoNumberPickerComponent implements OnInit {

  @Input() startsAt:number;
  @Output() valueChange:EventEmitter<any> = new EventEmitter();

  value:number;

  constructor() {
    this.startsAt = 0;
  }

  ngOnInit() {
    this.value = this.startsAt;
  }
  
  increase() {
    this.value ++;
    this.sendValue();
  }

  decrease() {
    if(this.value > this.startsAt) {
      this.value --;
      this.sendValue();
    }
  }

  sendValue() {
    this.valueChange.emit(this.value);
  }

}
