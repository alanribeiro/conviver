import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-experience-reports-carousel',
  templateUrl: './co-experience-reports-carousel.component.html',
  styleUrls: ['./co-experience-reports-carousel.component.scss']
})
export class CoExperienceReportsCarouselComponent {

  @Input() reports:Array<{
    userId:string,
    message:string,
    date:string,
    rate:number
  }>;

  translate:number;
  currentReport:number;

  constructor() {
    this.translate = 0;
    this.currentReport = 1;
  }

  next() {
    if(this.currentReport < this.reports.length) {
      this.translate += 100 / this.reports.length;
      this.currentReport += 1;
    }
  }

  previous() {
    if(this.currentReport > 1) {
      this.translate -= 100 / this.reports.length;
      this.currentReport -= 1;
    }
  }

}
