import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFireDatabase:AngularFireDatabase) { }

  getUserInfo = (userId) => {
    return this.angularFireDatabase.object(`users/${userId}`).valueChanges();
  }
}
