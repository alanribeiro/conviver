import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-checkbox',
  templateUrl: './co-checkbox.component.html',
  styleUrls: ['./co-checkbox.component.scss']
})
export class CoCheckboxComponent {
  @Input() title:string;
  @Input() checked:boolean;

  constructor() { 
    this.checked = false;
  }



}
