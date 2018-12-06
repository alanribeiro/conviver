import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

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

  constructor(private authService:AuthService) { }

  callbackFunction() {
    let that = this;
    eval("(" + this.callback + ")()");
  }

}
