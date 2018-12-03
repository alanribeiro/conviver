import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogged:boolean;
  verified:boolean;

  constructor(private router:Router) {
    this.userLogged = false;
    this.verified = false;
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem("conviverUser"));
    this.userLogged = user != null ? true : false;
    this.verified = true;
    if(this.verified && this.userLogged) {
      this.router.navigateByUrl(`profile/${user.id}`);
    }
  }
}
