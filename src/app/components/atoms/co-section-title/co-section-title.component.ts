import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-section-title',
  templateUrl: './co-section-title.component.html',
  styleUrls: ['./co-section-title.component.scss']
})
export class CoSectionTitleComponent {

  @Input() title:string;

  constructor() { }

}
