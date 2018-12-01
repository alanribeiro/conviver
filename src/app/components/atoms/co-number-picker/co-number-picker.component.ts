import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-number-picker',
  templateUrl: './co-number-picker.component.html',
  styleUrls: ['./co-number-picker.component.scss']
})
export class CoNumberPickerComponent implements OnInit {

  @Input() startsAt:number;
  value:number;

  constructor() {
    this.startsAt = 0;
  }

  ngOnInit() {
    this.value = this.startsAt;
  }

  
  increase() {
    this.value ++;
  }

  decrease() {
    if(this.value > this.startsAt) {
      this.value --;
    }
  }

}
