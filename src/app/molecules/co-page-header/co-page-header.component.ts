import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-page-header',
  templateUrl: './co-page-header.component.html',
  styleUrls: ['./co-page-header.component.scss']
})
export class CoPageHeaderComponent {

  @Input() title:string;
  @Input() subtitle:string;

  constructor() { }

}
