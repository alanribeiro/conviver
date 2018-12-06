import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  currentSection:number;
  currentSectionValidated:boolean;
  backAvaliable:boolean;
  doneAvaliable:boolean;
  userPersonalityItems:Array<string>;

  constructor(private registerService:RegisterService, private userService:UserService) {
    this.currentSection = 1;
    this.currentSectionValidated = false;
    this.backAvaliable = false;
    this.doneAvaliable = false;
  }

  ngOnInit() {
    this.getUserPersonalityItems();
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

  setSectionThree(value) {
    this.registerService.user.setAge(value.age);
    this.registerService.user.setGenre(value.genre);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionFour(value) {
    this.registerService.user.setPersonality(value.personality);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionFive(value) {
    if(value.photo !== undefined) {
      this.registerService.user.setPhoto(value.photo.thumbUrl);
    }
    this.registerService.user.setDescription(value.description);
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

    if(this.currentSection == 5) {
      this.doneAvaliable = true;
    }
  }

  previousSection() {
    this.currentSection --;
    this.currentSectionValidated = true;
    this.doneAvaliable = false;
    if(this.currentSection == 1) {
      this.backAvaliable = false;
    }
  }

  getUserPersonalityItems() {
    this.registerService.getUserPersonalityItems().subscribe(
      (data:any) => {
        this.userPersonalityItems = data.personality;
      }
    )
  }

  register() {
    this.registerService.registerUser();
  }

}