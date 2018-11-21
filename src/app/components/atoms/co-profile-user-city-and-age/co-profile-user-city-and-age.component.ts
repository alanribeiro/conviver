import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-profile-user-city-and-age',
  templateUrl: './co-profile-user-city-and-age.component.html',
  styleUrls: ['./co-profile-user-city-and-age.component.scss']
})
export class CoProfileUserCityAndAgeComponent {

  @Input() city:string;
  @Input() country:string;
  @Input() age:string;

  constructor() { }

}
