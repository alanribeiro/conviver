import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterContentInit {

  config: any;
  fullpage_api: any;
  translateYMain1 = 'translateY(300px)';
  translateYTitle1 = 'translateY(300px)';
  translateYSubtitle1 = 'translateY(250px)';
  translateYMain2 = 'translateY(300px)';
  translateYTitle2 = 'translateY(300px)';
  translateYSubtitle2 = 'translateY(250px)';
  translateYMain3 = 'translateY(300px)';
  opacity1 = '0';
  opacity2 = '0';
  opacity3 = '0';

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
      menu: '#menu',
      verticalCentered: false,
      scrollOverflow: true,

      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      },
      onLeave: (origin, destination, direction) => {
        switch (destination.index) {
          case 0: {
             break;
          }
          case 1: {
            this.translateYMain1 = 'translateY(0px)';
            this.translateYTitle1 = 'translateY(0px)';
            this.translateYSubtitle1 = 'translateY(0px)';
            setTimeout(() => {
              this.opacity1 = '1';
            }, 400);

             break;
          }
          case 2: {
            this.translateYMain2 = 'translateY(0px)';
            this.translateYTitle2 = 'translateY(0px)';
            this.translateYSubtitle2 = 'translateY(0px)';
            setTimeout(() => {
              this.opacity2 = '1';
            }, 400);
            break;
          }

          case 3: {
            this.translateYMain3 = 'translateY(0px)';
            setTimeout(() => {
              this.opacity3 = '1';
            }, 400);
            break;
          }
          default: {
             break;
          }
        }

        setTimeout(() => {
          switch (origin.index) {
            case 0: {
              break;
            }
            case 1: {
              this.translateYMain1 = 'translateY(300px)';
              this.translateYTitle1 = 'translateY(300px)';
              this.translateYSubtitle1 = 'translateY(250px)';
              this.opacity1 = '0';
              break;
            }
            case 2: {
              this.translateYMain2 = 'translateY(300px)';
              this.translateYTitle2 = 'translateY(300px)';
              this.translateYSubtitle2 = 'translateY(250px)';
              this.opacity2 = '0';
              break;
            }
            case 3: {
              this.translateYMain3 = 'translateY(300px)';
              this.opacity3 = '0';
              break;
            }
            default: {
              break;
            }
          }
        }, 500);
      }
    };
  }

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    });

    const scene2 = document.getElementById('scene2');
    const parallaxInstance2 = new Parallax(scene2, {
      relativeInput: true,
     hoverOnly: true
    });

  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }


}
