import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class CoMobileMenuService {

  MobileMenuItemsUrl = 'assets/js-utils/mobile-menu-items.json';
  isOpen: BehaviorSubject<boolean>;

  @Output() openMenu: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.isOpen = new BehaviorSubject(false);
  }

  getMobileMenuItems() {
    return this.http.get(this.MobileMenuItemsUrl);
  }

  toggleMenu(f) {
    if (f === true) {
      this.isOpen.next(true);
    }
    else if (f === false) {
      this.isOpen.next(false);
    }
    else if (f === 'toggle') {
    this.isOpen.next(!this.isOpen.getValue());
    }
  }
}
