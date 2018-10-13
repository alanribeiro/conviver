import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-stepper-dots-dot',
  templateUrl: './co-stepper-dots-dot.component.html',
  styleUrls: ['./co-stepper-dots-dot.component.scss']
})
export class CoStepperDotsDotComponent{
  @Input() active:boolean;

  constructor() {
    this.active = true;
   }

}