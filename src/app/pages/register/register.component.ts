import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: User;

  currentSectionValidated:boolean;
  errorFeedbackMessage:string;
  errorFeedbackDisplay:boolean;
  wrongFields:Array<string>;

  constructor() {
    this.currentSectionValidated = false;
    this.errorFeedbackMessage = "Todos os campos devem ser preenchidos";
    this.errorFeedbackDisplay = false;
    this.wrongFields = [];

    this.user = new User('gerar-um-id-automatico-aqui', '', '');
  }

  setSectionOne(value) {
    this.user.setFirstName(value.firstName);
    this.user.setLastName(value.lastName);
    this.setCurrentSectionValidated(value.validate);
  }

  setCurrentSectionValidated(value:boolean) {
    this.currentSectionValidated = value;
  }

  nextSection() {
    if(!this.currentSectionValidated) {
      this.errorFeedbackDisplay = true;

      if(this.user.getFirstName() == undefined || this.user.getFirstName() == "") {
        this.wrongFields.push('firstName');        
      }
      else if(this.wrongFields.includes('firstName')) {
        let index = this.wrongFields.indexOf('firstName');
        this.wrongFields.splice(index, 1);
      }
    
      if(this.user.getLastName() == undefined || this.user.getLastName() == "") {
        this.wrongFields.push('lastName');
      }
      else if(this.wrongFields.includes('lastName')) {
        let index = this.wrongFields.indexOf('lastName');
        this.wrongFields.splice(index, 1);
      }
    }
    else {
      this.wrongFields = [];
      this.errorFeedbackDisplay = false;
    }

  }

}