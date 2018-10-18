import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-mobile-menu-user',
  templateUrl: './co-mobile-menu-user.component.html',
  styleUrls: ['./co-mobile-menu-user.component.scss']
})
export class CoMobileMenuUserComponent {

  @Input() photo: string;
  @Input() name: string;
  @Input() level: number;
  @Input() adress: string;

  constructor() { }

}
