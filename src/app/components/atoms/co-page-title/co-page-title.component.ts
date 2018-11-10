import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-page-title',
  templateUrl: './co-page-title.component.html',
  styleUrls: ['./co-page-title.component.scss']
})
export class CoPageTitleComponent {

  @Input() title:string;

  constructor() { }

}
