import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-textarea',
  templateUrl: './co-textarea.component.html',
  styleUrls: ['./co-textarea.component.scss']
})
export class CoTextareaComponent{

  @Input() placeholder:string;
  @Input() fullWidth:boolean;
  @Input() error:boolean;
  @Input() rows:number;

  constructor() {
    this.fullWidth = true;
    this.error = false;
    this.rows = 3;
   }

}
