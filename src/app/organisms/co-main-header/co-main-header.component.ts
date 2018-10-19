import { Component, OnInit } from '@angular/core';
import { MainHeaderService } from '../../services/main-header/main-header.service';

@Component({
  selector: 'co-main-header',
  templateUrl: './co-main-header.component.html',
  styleUrls: ['./co-main-header.component.scss']
})
export class CoMainHeaderComponent implements OnInit {

  menuItems: any;

  constructor(private mainHeaderService:MainHeaderService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.mainHeaderService.getMenuItems().subscribe(
      (data:any) => {
        this.menuItems = data.items;
      }
    )
  }

}
