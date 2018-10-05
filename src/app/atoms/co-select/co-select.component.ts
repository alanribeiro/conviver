import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-select',
  templateUrl: './co-select.component.html',
  styleUrls: ['./co-select.component.scss']
})
export class CoSelectComponent {

  @Input() placeholder:string;
  @Input() options:Array<{value:string, label:string}>;
  selectedValue:string;

  constructor() {}

}
