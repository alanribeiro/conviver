import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth:AngularFireAuth, private userService:UserService, private router:Router) {}

  login = (credentials) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(value => {
      alert("Login efetuado com sucesso!");
      this.getCurrentUser(value.user.uid, `profile/${value.user.uid}`);
    }).catch(error => {
      if(error.code == "auth/network-request-failed") {
        alert("Erro na rede, verifique se você está conectado à internet!");
      }
      else if(error.code == "auth/email-already-exists") {
        alert("O e-mail informado já está cadastrado!");
      }
      else if(error.code == "auth/invalid-email") {
        alert("O e-mail informado é inválido, tente novamente!");
      }
      else if(error.code == "auth/invalid-password") {
        alert("A senha está incorreta, tente novamente!");
      }
      else if(error.code == "auth/user-not-found") {
        alert("Usuário não existe!");
      }
      else if(error.code == "auth/internal-error") {
        alert("Erro interno!");
      }
    });
  }

  getCurrentUser = (id, url) => {
    const userInfo = this.userService.getUserInfo(id);
    let snapshot = null;
    userInfo.subscribe(
      data => {
        snapshot = data;
        let user = new User(
          snapshot.id,
          snapshot.firstName, 
          snapshot.lastName, 
          snapshot.email,
          "secretPassword",
          snapshot.age,
          snapshot.genre,
          snapshot.personality,
          snapshot.photo,
          snapshot.description,
          snapshot.city,
          snapshot.state,
          snapshot.country,
          snapshot.since,
          1,
          [],
          []
        )
        this.userService.currentUser = user;
        this.router.navigateByUrl(url);
        localStorage.setItem("conviverUser", JSON.stringify(user));
      },
      error => this.getCurrentUser(id, url)
    )
  }

  logoff = () => {
    this.angularFireAuth.auth.signOut();
    localStorage.removeItem("conviverUser");
  }
}
