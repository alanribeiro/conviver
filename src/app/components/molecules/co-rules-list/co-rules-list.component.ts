import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-rules-list',
  templateUrl: './co-rules-list.component.html',
  styleUrls: ['./co-rules-list.component.scss']
})
export class CoRulesListComponent {

  @Input() rules:Array<any>;

  constructor() { }

}
