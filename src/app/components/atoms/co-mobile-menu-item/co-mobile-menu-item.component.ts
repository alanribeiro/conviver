import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'co-mobile-menu-item',
  templateUrl: './co-mobile-menu-item.component.html',
  styleUrls: ['./co-mobile-menu-item.component.scss']
})
export class CoMobileMenuItemComponent {

  @Input() icon: string;
  @Input() notifications: number;
  @Input() title: string;
  @Input() url: string;
  @Input() callback: string;

  constructor(private authService:AuthService) {}

  callbackFunction() {
    let that = this;
    eval("(" + this.callback + ")()");
  }

}
