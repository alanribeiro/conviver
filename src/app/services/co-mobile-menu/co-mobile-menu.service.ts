import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoMobileMenuService {

  MobileMenuItemsUrl = 'assets/js-utils/mobile-menu-items.json';

  constructor(private http: HttpClient) { }

  getMobileMenuItems() {
    return this.http.get(this.MobileMenuItemsUrl);
  }
}
