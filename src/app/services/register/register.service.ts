import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  user:User;
  userPersonalityItemsUrl:string = 'assets/js-utils/user-personality.json';

  constructor(private http:HttpClient, private angularFireDatabase:AngularFireDatabase, private angularFireAuth:AngularFireAuth, private authService:AuthService, private router:Router) {
    this.user = new User('id', '', '', '', '', 0, '', [], '', '', '', '', '', '', 1, [], []);
  }

  registerUser = () => {
    const email = this.user.getEmail();
    const password = this.user.getPassword();
    const register = this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    register.then(value => {
      this.registerUserData(value.user.uid, password);
    })
    .catch(error => alert("Erro ao cadastrar usuário!"));
  }

  registerUserData = (id, password) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const user = {
      id: id,
      firstName: this.user.getFirstName(),
      lastName: this.user.getLastName(),
      email: this.user.getEmail(),
      age: this.user.getAge(),
      genre: this.user.getGenre(),
      personality: this.user.getPersonality(),
      photo: this.user.getPhoto(),
      description: this.user.getDescription(),
      city: this.user.getCity(),
      state: this.user.getState(),
      country: this.user.getCountry(),
      since: `${day}/${month}/${year}`,
      level: this.user.getLevel(),
      advertisements: this.user.getAdvertisements()
    }
    const registerData = this.angularFireDatabase.database.ref("users").child(id).set(user);
    registerData.then(() => {
      alert("Usuário cadastrado com sucesso!");
      this.authService.getCurrentUser(id, `profile/${id}`);
      localStorage.setItem('conviverUser', JSON.stringify(user));
    }).catch(error => {
      alert("Erro ao cadastrar usuário!");
      this.removeUserFromAuthentication(user.email, password);
    });
  }

  registerEmail = (email) => {
    const id = this.angularFireDatabase.database.ref().push().key;
    return this.angularFireDatabase.database.ref("emails").child(id).set(email);
  }

  removeUserFromAuthentication = (email, password) => {
    const remove = this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    remove.then( () => {
      let user = this.angularFireAuth.auth.currentUser;
      user.delete();
    }).catch(error => {
      this.removeUserFromAuthentication(email, password);
    })
  }

  getUserPersonalityItems() {
    return this.http.get(this.userPersonalityItemsUrl);
  }
}
