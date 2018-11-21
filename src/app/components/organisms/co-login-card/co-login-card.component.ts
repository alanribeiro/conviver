import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'co-login-card',
  templateUrl: './co-login-card.component.html',
  styleUrls: ['./co-login-card.component.scss']
})
export class CoLoginCardComponent {

  email:string;
  password:string;

  constructor(private authService:AuthService) { }

  setEmail = (value:string) => {
    this.email = value;
  }

  setPassword = (value:string) => {
    this.password = value;
  }

  login = () => {
    const credentials = {
      email: this.email,
      password: this.password
    }
    this.authService.login(credentials);
  }

}
