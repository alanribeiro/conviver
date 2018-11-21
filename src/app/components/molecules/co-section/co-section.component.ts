import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-section',
  templateUrl: './co-section.component.html',
  styleUrls: ['./co-section.component.scss']
})
export class CoSectionComponent {

  @Input() title: string;

  constructor() { }

}
