import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from 'src/app/services/advertise/advertise.service';

@Component({
  selector: 'advertise-vacancy',
  templateUrl: './advertise-vacancy.component.html',
  styleUrls: ['./advertise-vacancy.component.scss']
})
export class AdvertiseVacancyComponent implements OnInit{

  selectablesItems:any;

  constructor(private advertiseService:AdvertiseService) { }

  ngOnInit() {
    this.getRoomsItems();
  }

  setSectionOne(value) {
    // console.log(value);
  }

  setSectionTwo(value) {
    // console.log(value);
  }

  getRoomsItems() {
    this.advertiseService.getRoomItems().subscribe(
      (data:any) => {
        this.selectablesItems = data;
      }
    )
  }

}
