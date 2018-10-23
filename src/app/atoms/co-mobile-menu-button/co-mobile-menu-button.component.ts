import { CoMobileMenuService } from './../../services/co-mobile-menu/co-mobile-menu.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'co-mobile-menu-button',
  templateUrl: './co-mobile-menu-button.component.html',
  styleUrls: ['./co-mobile-menu-button.component.scss']
})
export class CoMobileMenuButtonComponent {

  constructor(private coMobileMenuService: CoMobileMenuService) { }

  @HostListener('click')
  click() {
    this.coMobileMenuService.toggleMenu(true);
  }

}
