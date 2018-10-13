import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-stepper-dots',
  templateUrl: './co-stepper-dots.component.html',
  styleUrls: ['./co-stepper-dots.component.scss']
})
export class CoStepperDotsComponent implements OnInit {

  @Input() quantity:number;
  @Input() activeDot:number;

  dots:Array<boolean>

  constructor() {
    this.dots = [];
  }

  ngOnInit() {
    for(let i=0; i < this.quantity; i++) {
      this.dots.push(false);
    }

    this.dots[this.activeDot] = true;
  }

}
