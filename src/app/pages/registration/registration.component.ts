import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  activeDot = 0;

  titleList = [
    {
      title: 'lorem lorem lorem lorem lorem lorem loroem lorem lorem'
    }, {
      title: 'Index 1'
    }
  ]

  constructor() { }

}
