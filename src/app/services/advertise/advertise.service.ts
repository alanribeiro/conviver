import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  advertiseRoomsItemsUrl:string = 'assets/js-utils/advertise-selectables.json'; 

  constructor(private http:HttpClient) { }

  getRoomItems() {
    return this.http.get(this.advertiseRoomsItemsUrl);
  }
}
