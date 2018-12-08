import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'co-user-profile-header-actions',
  templateUrl: './co-user-profile-header-actions.component.html',
  styleUrls: ['./co-user-profile-header-actions.component.scss']
})
export class CoUserProfileHeaderActionsComponent {

  sameUser:boolean;

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { 
    const idUser = this.activatedRoute.snapshot.params.id;
    this.sameUser = idUser == this.userService.currentUser.getId() ? true : false;
  }

}
