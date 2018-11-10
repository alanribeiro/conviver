import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-title',
  templateUrl: './co-title.component.html',
  styleUrls: ['./co-title.component.scss']
})

export class CoTitleComponent {

  @Input() title:string;

  constructor() {}

}
