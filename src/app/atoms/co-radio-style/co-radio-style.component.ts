import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-radio-style',
  templateUrl: './co-radio-style.component.html',
  styleUrls: ['./co-radio-style.component.scss']
})
export class CoRadioStyleComponent {

  @Input() options:Array<{label:string, value:string}>;

  constructor() { }

}
