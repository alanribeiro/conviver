import { CoMobileMenuService } from './../../services/co-mobile-menu/co-mobile-menu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-mobile-menu',
  templateUrl: './co-mobile-menu.component.html',
  styleUrls: ['./co-mobile-menu.component.scss']
})

export class CoMobileMenuComponent {

  firstItemsList: any;
  secondItemsList: any;

  @Input() open: boolean;

  constructor(private coMobileMenuService: CoMobileMenuService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.coMobileMenuService.getMobileMenuItems().subscribe(
      (data: any) => {
        console.log(data.firstList);
        this.firstItemsList = data.firstList;
        this.secondItemsList = data.secondList;
      }
    );
  }
}
