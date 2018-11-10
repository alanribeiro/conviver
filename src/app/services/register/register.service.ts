import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  user:User;
  userPersonalityItemsUrl:string = 'assets/js-utils/user-personality.json';

  constructor(private http:HttpClient) {
    this.user = new User('gerar-um-id-automatico-aqui', '', '', '', '', 0, '', [], '', '');
  }

  getUserPersonalityItems() {
    return this.http.get(this.userPersonalityItemsUrl);
  }
}
