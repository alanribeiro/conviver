import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertisement',
  templateUrl: './co-advertisement.component.html',
  styleUrls: ['./co-advertisement.component.scss']
})

export class CoAdvertisementComponent {

  @Input() advertisement: Object;

  constructor() {}

}
