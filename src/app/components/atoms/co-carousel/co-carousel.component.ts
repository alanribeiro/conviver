import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-carousel',
  templateUrl: './co-carousel.component.html',
  styleUrls: ['./co-carousel.component.scss']
})
export class CoCarouselComponent {

  @Input() photos:Array<string>;

  constructor() { }

}
