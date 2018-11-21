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

  logoff = () => {}
}
