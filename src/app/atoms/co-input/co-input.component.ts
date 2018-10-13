import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-input',
  templateUrl: './co-input.component.html',
  styleUrls: ['./co-input.component.scss']
})
export class CoInputComponent {

  @Input() type:string;
  @Input() placeholder:string;
  @Input() error: boolean;

  constructor() {
    this.type = 'text';
    this.error = false;
  }

}
