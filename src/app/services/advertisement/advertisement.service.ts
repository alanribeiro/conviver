import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(private angularFireDatabase:AngularFireDatabase) { }

  getAdvertisement = (advertisementId) => {
    return this.angularFireDatabase.object(`advertisements/${advertisementId}`).valueChanges();
  }
}
