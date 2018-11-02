import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-error-feedback',
  templateUrl: './co-error-feedback.component.html',
  styleUrls: ['./co-error-feedback.component.scss']
})
export class CoErrorFeedbackComponent {
  @Input() message:string;
  @Input() display:boolean;

  constructor() { 
    this.display = false;
  }

}
