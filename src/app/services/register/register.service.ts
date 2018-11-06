import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  user:User;

  constructor() {
    this.user = new User('gerar-um-id-automatico-aqui', '', '', '', '', 0, '');
  }
}
