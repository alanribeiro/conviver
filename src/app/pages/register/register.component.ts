import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  currentSection:number;
  currentSectionValidated:boolean;
  backAvaliable:boolean;

  constructor(private registerService:RegisterService) {
    this.currentSection = 1;
    this.currentSectionValidated = false;
    this.backAvaliable = false;
  }

  setSectionOne(value) {
    this.registerService.user.setFirstName(value.firstName);
    this.registerService.user.setLastName(value.lastName);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionTwo(value) {
    this.registerService.user.setEmail(value.email);
    this.registerService.user.setPassword(value.password);
    this.setCurrentSectionValidated(value.validate);
  }

  setCurrentSectionValidated(value:boolean) {
    this.currentSectionValidated = value;
  }

  nextSection() {
    if(this.currentSectionValidated) {
      this.currentSection ++;
      this.backAvaliable = true;
      this.currentSectionValidated = false;
    }
  }

  previousSection() {
    this.currentSection --;
    this.currentSectionValidated = true;
    if(this.currentSection == 1) {
      this.backAvaliable = false;
    }
  }

}