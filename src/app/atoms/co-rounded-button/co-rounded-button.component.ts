import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-rounded-button',
  templateUrl: './co-rounded-button.component.html',
  styleUrls: ['./co-rounded-button.component.scss']
})
export class CoRoundedButtonComponent {

  @Input() icon:string;

  constructor() { }

}
