import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-rule',
  templateUrl: './co-rule.component.html',
  styleUrls: ['./co-rule.component.scss']
})
export class CoRuleComponent {

  @Input() rule:string;

  constructor() { }

}
