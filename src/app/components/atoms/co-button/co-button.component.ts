import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-button',
  templateUrl: './co-button.component.html',
  styleUrls: ['./co-button.component.scss']
})
export class CoButtonComponent {

  @Input() type:string;
  @Input() title:string;
  @Input() icon:string;
  @Input() fullWidth: boolean;
  @Input() margin:boolean;

  constructor() {
    this.type = 'primary';
    this.title = 'Button';
    this.fullWidth = false;
    this.margin = false;
  }

}
