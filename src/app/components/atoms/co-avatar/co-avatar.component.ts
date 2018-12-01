import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-avatar',
  templateUrl: './co-avatar.component.html',
  styleUrls: ['./co-avatar.component.scss']
})
export class CoAvatarComponent implements OnInit {

  @Input() photo:string;
  @Input() title:string;
  @Input() genre:string;
  @Input() size:string;

  constructor() {
    this.size = 'medium';
  }

  ngOnInit() {
    if(this.photo == undefined || this.photo == '') {
      return this.photo = `../../../../assets/images/${this.genre}-user-icon.png`;
    }
  }

}
