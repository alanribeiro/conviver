import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-icon',
  templateUrl: './co-icon.component.html',
  styleUrls: ['./co-icon.component.scss']
})
export class CoIconComponent {

  @Input() type:string;
  @Input() color:string;

  constructor() { }

}
