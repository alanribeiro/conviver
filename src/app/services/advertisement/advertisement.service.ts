import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  advertisementsURL:string = 'assets/js-utils/ad-teste.json';

  constructor(private http:HttpClient) { }

  getAdvertisements() {
    return this.http.get(this.advertisementsURL);
  }
}
