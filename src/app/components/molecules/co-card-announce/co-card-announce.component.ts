import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-card-announce',
  templateUrl: './co-card-announce.component.html',
  styleUrls: ['./co-card-announce.component.scss']
})
export class CoCardAnnounceComponent {

  @Input() icon: string;
  @Input() description: string;
  @Input() buttonTitle: string;
  @Input() buttonUrl: string;

  constructor() { }

}
