import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertisement-owner-info',
  templateUrl: './co-advertisement-owner-info.component.html',
  styleUrls: ['./co-advertisement-owner-info.component.scss']
})
export class CoAdvertisementOwnerInfoComponent {

  @Input() photo:string;
  @Input() genre:string;
  @Input() name:string;
  @Input() city:string;
  @Input() creationDate:string;
  @Input() adAddress:string;
  @Input() adRate:number;

  constructor() {}

}
