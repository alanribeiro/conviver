import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-logo',
  templateUrl: './co-logo.component.html',
  styleUrls: ['./co-logo.component.scss']
})
export class CoLogoComponent {

  @Input() type: string;
  @Input() color: string;
  @Input() width: string;

  constructor() {
    this.type = 'horizontal';
    this.color = 'white';
    this.width = '100';
  }
}
