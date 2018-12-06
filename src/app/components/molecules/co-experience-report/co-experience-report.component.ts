import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'co-experience-report',
  templateUrl: './co-experience-report.component.html',
  styleUrls: ['./co-experience-report.component.scss']
})
export class CoExperienceReportComponent implements OnInit {

  @Input() report:{
    userId:string,
    message:string,
    date:string,
    rate:number
  }

  user:User; // Recuperar usuário do firebase com o userId

  constructor(private userService:UserService) { 
    this.user = new User("id", "", "", "", "", 0, "", [], "", "", "", "", "", "", 1, [], []);
  }

  ngOnInit() {
    const userInfo = this.userService.getUserInfo(this.report.userId);
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
          snapshot.state,
          snapshot.country,
          snapshot.since,
          1,
          snapshot.advertisements == undefined ? [] : snapshot.advertisements,
          snapshot.comments == undefined ? [] : snapshot.comments
        )
      },
      error => console.log(error)
    )
  }

}
