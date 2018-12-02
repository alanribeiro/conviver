import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from 'src/app/models/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  advertiseSelectablesUrl:string = 'assets/js-utils/advertise-selectables.json';
  statesUrl:string = 'assets/js-utils/states.json';

  advertisement:Advertisement;

  constructor(private http:HttpClient) {
    this.advertisement = new Advertisement('id','', [], [], [], '', '', 0, '', '', '', '', '', 1, 0, [], '', '', {value: 0, waterAndElectricityIncluded: false}, [], [], [], [], []);
  }

  getRoomItems() {
    return this.http.get(this.advertiseSelectablesUrl);
  }

  getStates() {
    return this.http.get(this.statesUrl);
  }
}
