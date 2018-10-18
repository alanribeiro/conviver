import { Component, Input} from '@angular/core';

@Component({
  selector: 'co-insignia',
  templateUrl: './co-insignia.component.html',
  styleUrls: ['./co-insignia.component.scss']
})
export class CoInsigniaComponent {

  @Input() level: number;

  constructor() { }

}
