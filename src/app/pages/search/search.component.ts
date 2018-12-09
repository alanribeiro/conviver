import { Component } from '@angular/core';
import { AdvertisementService } from '../../services/advertisement/advertisement.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  advertisementsResult:Array<any>;
  searchTag:string;

  constructor(private advertisementService:AdvertisementService) {
    this.advertisementService.getAllAdvertisements()
    .subscribe(
      data => {
        this.advertisementsResult = data;
      },
      error => console.log(error)
    );
  }

  setSearchTag(value) {
    this.searchTag = value;
  }

}
