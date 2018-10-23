import { CoMobileMenuService, CoMobileMenuService } from './../../services/co-mobile-menu/co-mobile-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
 
  private swipeCoord?: [number, number];
  private swipeTime?: number;

  constructor(private coMobileMenuService: CoMobileMenuService) { }

  ngOnInit() {
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 && (Math.abs(direction[0]) > 30) && Math.abs(direction[0]) > Math.abs(direction[1] * 3) && direction[0] > direction[1]) {
        this.coMobileMenuService.toggleMenu(true);

      } else if (duration < 1000 && (Math.abs(direction[0]) > 30) && Math.abs(direction[0]) > Math.abs(direction[1] * 3) && direction[0] < direction[1]) {
        this.coMobileMenuService.toggleMenu(false);
      }
    }
  }
}
