import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'co-advertisement-main-section',
  templateUrl: './co-advertisement-main-section.component.html',
  styleUrls: ['./co-advertisement-main-section.component.scss']
})
export class CoAdvertisementMainSectionComponent {

  @Input() photos:Array<string>;
  @Input() user:User;
  @Input() creationDate:string;
  @Input() address:string;
  @Input() rate:string;

  constructor() {}
}
