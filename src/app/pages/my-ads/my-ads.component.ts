import { Component } from '@angular/core';
import { AdvertisementService } from '../../services/advertisement/advertisement.service';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent {

  myAds:Array<any>;

  constructor(private advertisementService:AdvertisementService, private userService:UserService) {
    this.advertisementService.getUserAdvertisements(this.userService.currentUser.getId())
    .then(snapshot => {
      this.myAds = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }));
    })
    .catch(error => error);
  }
}
