import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'co-message-item',
  templateUrl: './co-message-item.component.html',
  styleUrls: ['./co-message-item.component.scss']
})
export class CoMessageItemComponent implements OnInit {

  date: string;

  constructor(private userService:UserService) { }

  ngOnInit(){
    this.date = this.userService.currentUser.getSince();
  }

}
