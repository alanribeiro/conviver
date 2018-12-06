import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-illustration-item-list',
  templateUrl: './co-illustration-item-list.component.html',
  styleUrls: ['./co-illustration-item-list.component.scss']
})
export class CoIllustrationItemListComponent {

  @Input() itemsList: Array<string>;
  @Input() size:string;

  constructor() { }

}
