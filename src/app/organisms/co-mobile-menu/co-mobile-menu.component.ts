import { CoMobileMenuService } from './../../services/co-mobile-menu/co-mobile-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-mobile-menu',
  templateUrl: './co-mobile-menu.component.html',
  styleUrls: ['./co-mobile-menu.component.scss']
})

export class CoMobileMenuComponent implements OnInit {

  firstItemsList: any;
  secondItemsList: any;

  isOpen = true;

  constructor(private coMobileMenuService: CoMobileMenuService) { }

  ngOnInit() {
    this.getItems();
    this.coMobileMenuService.isOpen.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  getItems() {
    this.coMobileMenuService.getMobileMenuItems().subscribe(
      (data: any) => {
        this.firstItemsList = data.firstList;
        this.secondItemsList = data.secondList;
      }
    );
  }
}
