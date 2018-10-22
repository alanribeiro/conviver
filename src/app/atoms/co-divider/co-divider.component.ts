import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-divider',
  templateUrl: './co-divider.component.html',
  styleUrls: ['./co-divider.component.scss']
})
export class CoDividerComponent {

  @Input() context:string;

  constructor() {
    this.context = 'default';
  }

}
