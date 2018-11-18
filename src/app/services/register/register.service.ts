import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  user:User;
  userPersonalityItemsUrl:string = 'assets/js-utils/user-personality.json';

  constructor(private http:HttpClient, private angularFireDatabaseModule:AngularFireDatabase, private angularFireAuth:AngularFireAuth) {
    this.user = new User('id', '', '', '', '', 0, '', [], '', '', '', '', '', 1, [], []);
  }

  registerUser = () => {
    const email = this.user.getEmail();
    const password = this.user.getPassword();
    const register = this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    register.then(value => {
      this.registerUserData(value.user.uid);
    })
    .catch(error => console.log("Erro ao cadastrar usuário! deu erro no registeruser", error));
  }

  registerUserData = (id) => {
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
      country: this.user.getCountry(),
      since: `${day}/${month}/${year}`,
      level: this.user.getLevel(),
      advertisements: this.user.getAdvertisements()
    }
    const registerData = this.angularFireDatabaseModule.database.ref("users").child(id).set(user);
    registerData.then(() => {
      alert("Usuário cadastrado com sucesso!");
    }).catch(error => console.log("Erro ao cadastrar usuário! deu erro no registeruserdata", error));
  }

  getUserPersonalityItems() {
    return this.http.get(this.userPersonalityItemsUrl);
  }
}
