import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth:AngularFireAuth) {}

  login = (credentials) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(data => {
      alert("Login efetuado com sucesso!");
      console.log(data);
    }).catch(error => {
      switch(error.code) {
        case "auth/network-request-failed":
          alert("Erro ne rede, verifique se você está conectado à internet!");

        case "auth/email-already-exists":
          alert("O e-mail informado já está cadastrado!");
        
        case "auth/invalid-email":
          alert("O e-mail informado é inválido, tente novamente!");

        case "auth/invalid-password":
          alert("A senha está incorreta, tente novamente!");

        case "auth/user-not-found":
          alert("Usuário não existe!");

        case "auth/internal-error":
          alert("Erro interno!");
      }
    });
  }

  logoff = () => {}
}
