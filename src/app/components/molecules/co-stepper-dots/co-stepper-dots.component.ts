import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'co-stepper-dots',
  templateUrl: './co-stepper-dots.component.html',
  styleUrls: ['./co-stepper-dots.component.scss']
})
export class CoStepperDotsComponent implements OnInit, OnChanges {

  @Input() quantity:number;
  @Input() activeDot:number;

  dots:Array<boolean>

  constructor() {
    this.dots = [];
  }

  ngOnInit() {
    for(let i=1; i < this.quantity; i++) {
      this.dots.push(false);
    }
  }

  ngOnChanges() {
    for(let i in this.dots) {
      this.dots[i] = false;
    }

    this.dots[this.activeDot] = true;
  }

}
