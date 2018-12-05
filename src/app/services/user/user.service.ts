import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser:User;

  constructor(private angularFireDatabase:AngularFireDatabase) {
    const user = JSON.parse(localStorage.getItem("conviverUser"));
    if(user != null) {
      let obj = new User(
        user.id,
        user.firstName, 
        user.lastName, 
        user.email,
        "secretPassword",
        user.age,
        user.genre,
        user.personality,
        user.photo,
        user.description,
        user.city,
        user.state,
        user.country,
        user.since,
        1,
        [],
        []
      )
      this.currentUser = obj;
    }
  }

  getUserInfo = (userId) => {
    return this.angularFireDatabase.object(`users/${userId}`).valueChanges();
  }
}
