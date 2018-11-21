import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user:User;

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) {
    const idUser = this.activatedRoute.snapshot.params.id;
    const userInfo = this.userService.getUserInfo(idUser);
    let snapshot = null;
    userInfo.subscribe(
      data => {
        snapshot = data;
        this.user = new User(
          snapshot.id,
          snapshot.firstName, 
          snapshot.lastName, 
          snapshot.email,
          "secretPassword",
          snapshot.age,
          snapshot.genre,
          snapshot.personality,
          snapshot.photo,
          snapshot.description,
          snapshot.city,
          snapshot.country,
          snapshot.since,
          1,
          [],
          []
        )
      },
      error => console.log(error)
    )
  }
}
