import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-logo',
  templateUrl: './co-logo.component.html',
  styleUrls: ['./co-logo.component.scss']
})
export class CoLogoComponent {

  @Input() type:string;
  @Input() color:string;

  constructor() {
    this.type = 'horizontal'
    this.color = 'white'
  }
}
