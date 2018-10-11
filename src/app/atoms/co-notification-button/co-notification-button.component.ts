import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-notification-button',
  templateUrl: './co-notification-button.component.html',
  styleUrls: ['./co-notification-button.component.scss']
})
export class CoNotificationButtonComponent {

  @Input() withNotification:boolean;

  constructor() {
    this.withNotification = false;
  }

}
