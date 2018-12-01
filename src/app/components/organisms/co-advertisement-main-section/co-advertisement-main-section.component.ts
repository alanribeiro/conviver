import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'co-advertisement-main-section',
  templateUrl: './co-advertisement-main-section.component.html',
  styleUrls: ['./co-advertisement-main-section.component.scss']
})
export class CoAdvertisementMainSectionComponent implements OnInit{

  @Input() photos:Array<string>;
  @Input() user:User;
  @Input() creationDate:string;
  @Input() address:string;
  @Input() rate:string;

  constructor() {}

  ngOnInit() {
    console.log(this.address);
  }
}
