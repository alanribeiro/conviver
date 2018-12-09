import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CompatibilityService {

  highest:number;
  high:number;
  normal:number;
  average:number;
  low:number;
  lowest:number;

  constructor(private userService:UserService) { 
    this.highest = 12;
    this.high = 10;
    this.normal = 8;
    this.average = 7.5;
    this.low = 5;
    this.lowest = 2;
  }

  verifyCompatibility = (data1:{personality:Array<string>, age:number}, data2:{personality:Array<string>, age:number}) => {
    let compatiblity = (this.verifyPersonalities(data1.personality, data2.personality) + this.verifyAge(data1.age, data2.age)) / 2;
    return compatiblity;
  }

  verifyPersonalities = (personality1:Array<string>, personality2:Array<string>) => {
    let personalityPercentage = 0;

    if((personality1.includes("Fumante") && personality2.includes("Fumante")) || (!personality1.includes("Fumante") && !personality2.includes("Fumante"))) {
      personalityPercentage += this.high;
    }

    else personalityPercentage -= 3;

    if((personality1.includes("Organizado") && personality2.includes("Organizado")) || (!personality1.includes("Organizado") && !personality2.includes("Organizado"))) {
      personalityPercentage += this.highest;
    }

    else personalityPercentage -= 5;

    if((personality1.includes("Festeiro") && personality2.includes("Festeiro")) || (!personality1.includes("Festeiro") && !personality2.includes("Festeiro"))) {
      personalityPercentage += this.high;
    }
    
    if((personality1.includes("LGBT+") && personality2.includes("LGBT+")) || (!personality1.includes("LGBT+") && !personality2.includes("LGBT+"))) {
      personalityPercentage += this.high;
    }

    else personalityPercentage -= 3;

    if((personality1.includes("Religioso") && personality2.includes("Religioso"))) {
      personalityPercentage += this.lowest;
    }

    else if(!personality1.includes("Religioso") && !personality2.includes("Religioso")) {
      personalityPercentage += this.average;
    }

    if((personality1.includes("Vegetariano") && personality2.includes("Vegetariano")) || (!personality1.includes("Vegetariano") && !personality2.includes("Vegetariano"))) {
      personalityPercentage += this.normal;
    }

    else personalityPercentage -= 2;

    if((personality1.includes("Fitness") && personality2.includes("Fitness")) || (!personality1.includes("Fitness") && !personality2.includes("Fitness"))) {
      personalityPercentage += this.average;
    }

    if((personality1.includes("Comunicativo") && personality2.includes("Comunicativo")) || (!personality1.includes("Comunicativo") && !personality2.includes("Comunicativo"))) {
      personalityPercentage += this.average;
    }

    if((personality1.includes("Geek") && personality2.includes("Geek")) || (!personality1.includes("Geek") && !personality2.includes("Geek"))) {
      personalityPercentage += this.low;
    }

    if((personality1.includes("Caseiro") && personality2.includes("Caseiro")) || (!personality1.includes("Caseiro") && !personality2.includes("Caseiro"))) {
      personalityPercentage += this.average;
    }

    if((personality1.includes("Estudante") && personality2.includes("Estudante")) || (!personality1.includes("Estudante") && !personality2.includes("Estudante"))) {
      personalityPercentage += this.average;
    }

    if((personality1.includes("Profissional") && personality2.includes("Profissional")) || (!personality1.includes("Profissional") && !personality2.includes("Profissional"))) {
      personalityPercentage += this.average;
    }

    if((personality1.includes("Fumante") && personality2.includes("Fitness")) || (personality1.includes("Fitness") && personality2.includes("Fumante"))) {
      personalityPercentage -= 3;
    }

    if((personality1.includes("Religioso") && personality2.includes("LGBT+")) || (personality1.includes("LGBT+") && personality2.includes("Religioso"))) {
      personalityPercentage -= 4;
    }

    if((personality1.includes("Festeiro") && personality2.includes("Caseiro")) || (personality1.includes("Caseiro") && personality2.includes("Festeiro"))) {
      personalityPercentage -= 3;
    }

    return personalityPercentage;
  }

  verifyAge = (age1, age2) => {
    const ageDifference = age1 >= age2 ? (age1 - age2) : (age2 - age1);
    return 100 - (ageDifference * 1.5);
  }
}
