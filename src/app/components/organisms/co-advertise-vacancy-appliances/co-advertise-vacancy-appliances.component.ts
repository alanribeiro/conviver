import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertise-vacancy-appliances',
  templateUrl: './co-advertise-vacancy-appliances.component.html',
  styleUrls: ['./co-advertise-vacancy-appliances.component.scss']
})
export class CoAdvertiseVacancyAppliancesComponent {

  @Input() appliances:Array<any>;

  constructor() { }

}
