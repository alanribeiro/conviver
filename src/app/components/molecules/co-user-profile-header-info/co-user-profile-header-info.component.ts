import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-user-profile-header-info',
  templateUrl: './co-user-profile-header-info.component.html',
  styleUrls: ['./co-user-profile-header-info.component.scss']
})
export class CoUserProfileHeaderInfoComponent {

  @Input() userName:string;
  @Input() city:string;
  @Input() country:string;
  @Input() age:number;
  @Input() userSince:string;

  constructor() { }

}