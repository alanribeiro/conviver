import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItensUrl: string = 'assets/js-utils/menu-items.json';

  constructor(private http: HttpClient) { }

  getMenuItems() {
    return this.http.get(this.menuItensUrl);
  }
}
