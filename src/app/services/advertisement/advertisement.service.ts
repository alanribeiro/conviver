import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from 'src/app/models/advertisement';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  advertiseSelectablesUrl:string = 'assets/js-utils/advertise-selectables.json';
  statesUrl:string = 'assets/js-utils/states.json';
  advertisement:Advertisement;

  constructor(private http:HttpClient, private angularFireDatabase:AngularFireDatabase, private userService:UserService) {
    this.advertisement = new Advertisement('id','', [], [], [], '', '', 0, '', '', '', '', '', 1, 0, [], '', '', {value: 0, waterAndElectricityIncluded: false}, [], [], [], [], []);
  }

  registerAdvertisement = () => {
    const id = this.angularFireDatabase.database.ref().push().key;
    const date = new Date();
    const thumbnail = this.advertisement.getPhotos()[0];
    this.advertisement.setId(id);
    this.advertisement.setCountry("Brasil");
    this.advertisement.setCreationDate(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    this.advertisement.setOwnerId(this.userService.currentUser.getId());
    this.advertisement.setThumbnail(thumbnail);
    return this.angularFireDatabase.database.ref("advertisements").child(id).set(this.advertisement);
  }

  getAdvertisement = (advertisementId) => {
    return this.angularFireDatabase.object(`advertisements/${advertisementId}`).valueChanges();
  }

  getRoomItems = () => {
    return this.http.get(this.advertiseSelectablesUrl);
  }

  getStates = () => {
    return this.http.get(this.statesUrl);
  }
}
