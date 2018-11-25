import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'co-experience-report',
  templateUrl: './co-experience-report.component.html',
  styleUrls: ['./co-experience-report.component.scss']
})
export class CoExperienceReportComponent {

  @Input() report:{
    userId:string,
    message:string,
    date:string,
    rate:number
  }

  user:User; // Recuperar usuário do firebase com o userId

  constructor() { }

}
