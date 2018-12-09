import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-residents-list',
  templateUrl: './co-residents-list.component.html',
  styleUrls: ['./co-residents-list.component.scss']
})
export class CoResidentsListComponent {

  @Input() residents:Array<{
    id:string,
    name:string,
    photo:string,
    genre:string,
  }>;

  constructor() { }

}
