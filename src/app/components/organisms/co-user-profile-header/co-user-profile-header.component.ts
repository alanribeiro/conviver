import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-user-profile-header',
  templateUrl: './co-user-profile-header.component.html',
  styleUrls: ['./co-user-profile-header.component.scss']
})
export class CoUserProfileHeaderComponent {

  @Input() photo:string;
  @Input() genre:string;
  @Input() level:number;
  @Input() name:string;
  @Input() city:string;
  @Input() country:string;
  @Input() age:string;
  @Input() since:string;

  constructor() { }

}
