import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'co-notification-item',
  templateUrl: './co-notification-item.component.html',
  styleUrls: ['./co-notification-item.component.scss']
})
export class CoNotificationItemComponent implements OnInit {

  date: string;

  constructor(private userService:UserService) { }

  ngOnInit(){
    this.date = this.userService.currentUser.getSince();
  }

}
