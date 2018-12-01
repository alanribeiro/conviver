import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  advertiseSelectablesUrl:string = 'assets/js-utils/advertise-selectables.json';
  statesUrl:string = 'assets/js-utils/states.json';

  constructor(private http:HttpClient) { }

  getRoomItems() {
    return this.http.get(this.advertiseSelectablesUrl);
  }

  getStates() {
    return this.http.get(this.statesUrl);
  }
}
