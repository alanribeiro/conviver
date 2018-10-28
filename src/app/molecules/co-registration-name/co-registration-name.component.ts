import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-registration-name',
  templateUrl: './co-registration-name.component.html',
  styleUrls: ['./co-registration-name.component.scss']
})
export class CoRegistrationNameComponent implements OnInit {

  name = 'turubom';
  lastName: string;

  constructor() { }

  ngOnInit() {
  }

  send() {
    console.log('foi');
  }

}
