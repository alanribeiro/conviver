import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-illustration-item',
  templateUrl: './co-illustration-item.component.html',
  styleUrls: ['./co-illustration-item.component.scss']
})
export class CoIllustrationItemComponent {
  @Input() item:string;
  @Input() icon:string;
  @Input() showTitle:boolean;
  @Input() size:string;

  constructor() {
    this.showTitle = true;
  }

}
