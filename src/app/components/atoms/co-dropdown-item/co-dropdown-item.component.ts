import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'co-dropdown-item',
  templateUrl: './co-dropdown-item.component.html',
  styleUrls: ['./co-dropdown-item.component.scss']
})
export class CoDropdownItemComponent {

  @Input() icon: string;
  @Input() title: string;
  @Input() url: string;
  @Input() callback: string;

  constructor(private authService:AuthService, private userService:UserService, private router:Router) { }

  redirectToMyProfile = () => {
    this.router.navigateByUrl(`profile/${this.userService.currentUser.getId()}`);
    location.reload();
  }

  callbackFunction() {
    let that = this;
    eval("(" + this.callback + ")()");
  }

}
