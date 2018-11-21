import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-user-profile-header-avatar',
  templateUrl: './co-user-profile-header-avatar.component.html',
  styleUrls: ['./co-user-profile-header-avatar.component.scss']
})
export class CoUserProfileHeaderAvatarComponent {

  @Input() photo:string;
  @Input() genre:string;
  @Input() level:number;

  constructor() { }

}
