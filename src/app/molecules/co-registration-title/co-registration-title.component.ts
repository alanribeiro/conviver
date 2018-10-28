import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-registration-title',
  templateUrl: './co-registration-title.component.html',
  styleUrls: ['./co-registration-title.component.scss']
})
export class CoRegistrationTitleComponent {

  @Input() title: string;

  constructor() { }

}
