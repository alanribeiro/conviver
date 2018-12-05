import { Component, OnInit, AfterContentInit, HostListener } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';
import * as Parallax from 'parallax-js';

declare var $: any;
declare var Parallax: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterContentInit {

  email:string;
  config: any;
  fullpage_api: any;
  translateYMain1 = 'translateY(500px)';
  translateYTitle1 = 'translateY(300px)';
  translateYSubtitle1 = 'translateY(250px)';
  translateYMain2 = 'translateY(300px)';
  translateYTitle2 = 'translateY(300px)';
  translateYSubtitle2 = 'translateY(250px)';
  translateYMain3 = 'translateY(300px)';
  translateYMain4 = 'translateY(0px)';
  opacity1 = '0';
  opacity2 = '0';
  opacity3 = '0';
  opacity4 = '1';

  constructor(private registerService:RegisterService, private router:Router) {
    this.config = {

      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
      menu: '#menu',
      verticalCentered: false,
      scrollOverflow: true,

      afterResize: () => {
        console.log('After resize');
      },
      onLeave: (origin, destination, direction) => {
        switch (destination.index) {
          case 0: {
            this.translateYMain4 = 'translateY(0px)';
            setTimeout(() => {
              this.opacity4 = '1';
            }, 400);
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
              this.translateYMain4 = 'translateY(300px)';
              this.opacity4 = '0';
              break;
            }
            case 1: {
              this.translateYMain1 = 'translateY(500px)';
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

  setEmail = (value:string) => {
    this.email = value;
  }

  registerEmail = () => {
    const register = this.registerService.registerEmail(this.email);
    register.then(() => {
      alert("E-mail cadastrado com sucesso!");
      this.router.navigateByUrl("home");
      location.reload();      
    })
    .catch(error => alert("Erro ao cadastrar e-mail!"));
  }

  ngAfterContentInit() {

    let found = false;
    let done = true;

    $(document).ready(function() {

      $('#playBtn').on('click', () => {
        done = false;

        // tslint:disable-next-line:max-line-length
        $('.landing-page__one__flex__game__overlay').css('display', 'none');
        $('.landing-page__one__flex__game__text-container').css('display', 'none');
      });

      $(document).on('keyup', function(e) {

        if (!done) {
        e.repeat = false;

        const $c1 = $('#c1');
        const $c2 = $('#c2');
        const $city = $('#city');

        if (e.keyCode === 39) {
          if ($c1.hasClass('reverse')) {
            $c1.removeClass('reverse');

            if (found) {
              $c2.addClass('normal');
            }
          }

          if ($c1.position().left > 350 && found === false) {

            done = true;

            $c1.addClass('look');

            setTimeout(function() {
              $c1.removeClass('look');
            }, 1500);

            setTimeout(function() {
            $c2.addClass('look2');
            }, 1500);

            setTimeout(function() {
              $c2.removeClass('look2');
              $c2.addClass('normal');
            }, 3000);

            setTimeout(() => {

            $c1.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            $c2.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            done = false;
            
            }, 3300);

            found = true;

          } else {

            if (found) {
              $c2.addClass('walk');
              $c2.animate({
                left: '+=52'
              }, 500);

              setTimeout(function() {
                $c2.removeClass('walk');
              }, 500);
            }

            $c1.addClass('walk');
            $c1.animate({
              left: '+=52'
            }, 500);
            $city.animate({
              backgroundPosition: '-=40'
            }, 500);
          }

          setTimeout(function() {
            $c1.removeClass('walk');
          }, 500);

          if ($c1.position().left > 640 && found) {
            $c1.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            $c2.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            setTimeout(function() {
              $('.landing-page__one__flex__game__overlay').css('display', 'block');
              $('.landing-page__one__flex__game__text-container').css('display', 'flex');
              $('.landing-page__one__flex__game__play-btn').css('display', 'none');

              // tslint:disable-next-line:max-line-length
              $('.landing-page__one__flex__game__text-container__text').html('Boa! Com você e o conviver, Enzo encontrou Valentina, e os dois encontraram um apartamento para dividir! <p> Role a página para baixo para saber mais.');
            }, 1000);

            done = true;
          }

        } else if (e.keyCode === 37) {

          $c1.addClass('walk reverse');

          if ($c1.position().left < 50) {

          } else {

            if (found) {
              $c2.removeClass('normal');
              $c2.addClass('walk');
              $c2.animate({
                left: '-=52'
              }, 500);

              setTimeout(function() {
                $c2.removeClass('walk');
              }, 500);
            }

            $c1.animate({
              left: '-=52'
            }, 500);
            $city.animate({
              backgroundPosition: '+=40'
            }, 500);
          }

          setTimeout(function() {
            $c1.removeClass('walk');
          }, 500);

        } else if (e.keyCode === 32) {

          if (found) {
            $c2.animate({
              top: '-=52'
            }, 500);

            $c2.animate({
              top: '+=52'
            }, 500);
          }

          $c1.animate({
            top: '-=52'
          }, 500);

          $c1.animate({
            top: '+=52'
          }, 500);
        }
      }

      });
    });


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

    const scene3 = document.getElementById('scene3');
    const parallaxInstance3 = new Parallax(scene3, {
      relativeInput: true,
     hoverOnly: true
    });
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
