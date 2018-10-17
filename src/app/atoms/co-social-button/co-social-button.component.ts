import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-social-button',
  templateUrl: './co-social-button.component.html',
  styleUrls: ['./co-social-button.component.scss']
})
export class CoSocialButtonComponent {

  @Input() socialNetwork:string;

  constructor() {
    
  }
}
