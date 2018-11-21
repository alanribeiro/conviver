import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-profile-user-since',
  templateUrl: './co-profile-user-since.component.html',
  styleUrls: ['./co-profile-user-since.component.scss']
})
export class CoProfileUserSinceComponent {

  @Input() date:string;

  constructor() { }

}
