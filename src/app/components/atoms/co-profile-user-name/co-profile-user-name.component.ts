import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-profile-user-name',
  templateUrl: './co-profile-user-name.component.html',
  styleUrls: ['./co-profile-user-name.component.scss']
})
export class CoProfileUserNameComponent {

  @Input() userName:string;

  constructor() { }

}
