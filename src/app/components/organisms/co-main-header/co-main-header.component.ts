import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';

@Component({
  selector: 'co-main-header',
  templateUrl: './co-main-header.component.html',
  styleUrls: ['./co-main-header.component.scss']
})
export class CoMainHeaderComponent implements OnInit {

  user:any;

  menuMainItems:any;
  menuOtherItems:any;
  menuMobileOpen:boolean;

  constructor(private menuService:MenuService) {
    this.user = {
      name: "Lionel Messi",
      photo: "https://i.kym-cdn.com/entries/icons/medium/000/020/776/messi.jpg",
      genre: "male",
      adress: "Barcelona - CA, Espanha",
      level: 1,
    }
    this.menuMobileOpen = false;
  }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuService.getMenuItems().subscribe(
      (data:any) => {
        this.menuMainItems = data.mainItems;
        this.menuOtherItems = data.otherItems;
      }
    )
  }

  openMenuMobile() {
    this.menuMobileOpen = true;
  }

  closeMenuMobile() {
    this.menuMobileOpen = false;
  }

}
