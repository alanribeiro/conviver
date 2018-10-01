import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-page-subtitle',
  templateUrl: './co-page-subtitle.component.html',
  styleUrls: ['./co-page-subtitle.component.scss']
})
export class CoPageSubtitleComponent {

  @Input() subtitle:string;

  constructor() { }

}
