import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../../services/menu/menu.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'co-main-header',
  templateUrl: './co-main-header.component.html',
  styleUrls: ['./co-main-header.component.scss']
})
export class CoMainHeaderComponent implements OnInit {

  user: any;

  menuMainItems: any;
  menuOtherItems: any;
  menuMobileOpen: boolean;
  userDropdown: boolean;
  messagesDropdown: boolean;
  notificationsDropdown: boolean;

  constructor(private menuService: MenuService, private userService:UserService, private router:Router) {
    if(this.userService.currentUser != undefined) {
      this.user = {
        name: `${this.userService.currentUser.getFirstName()} ${this.userService.currentUser.getLastName()}`,
        photo: this.userService.currentUser.getPhoto(),
        genre: this.userService.currentUser.getGenre(),
        adress: `${this.userService.currentUser.getCity()} - ${this.userService.currentUser.getState()}, ${this.userService.currentUser.getCountry()}`,
        level: 1,
      }
    }
    else {
      this.user = {
        name: '',
        photo: '',
        genre: 'male',
        adress: '',
        level: 1,
      }
    }
    this.menuMobileOpen = false;
    this.userDropdown = false;
    this.messagesDropdown = false;
    this.notificationsDropdown = false;
  }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuService.getMenuItems().subscribe(
      (data:any) => {
        this.menuMainItems = data.mainItems;
        this.menuOtherItems = data.otherItems;
        const userId = this.userService.currentUser.getId();
        this.menuOtherItems[0].url = `/profile/${userId}`;
      }
    )
  }

  openMenuMobile() {
    this.menuMobileOpen = true;
  }

  closeMenuMobile() {
    this.menuMobileOpen = false;
  }

  toggleDropdown(dropdown) {
    if(dropdown == 'Mensagens') {
      this.notificationsDropdown = false;
      this.messagesDropdown = !this.messagesDropdown;
    }
    else if(dropdown == 'Notificações') {
      this.messagesDropdown = false;
      this.notificationsDropdown = !this.notificationsDropdown;
    }
  }

  toggleUserDropdown() {
    this.userDropdown = !this.userDropdown;
  }

}
