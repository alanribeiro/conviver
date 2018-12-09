import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-compatibility',
  templateUrl: './co-compatibility.component.html',
  styleUrls: ['./co-compatibility.component.scss']
})
export class CoCompatibilityComponent implements OnInit {

  @Input() compatibility:number;

  text:string;

  constructor() { }

  ngOnInit() {
    if(this.compatibility <= 40) {
      this.text = "Baixa compatibilidade";
    }
    else if(this.compatibility > 40 && this.compatibility <= 70) {
      this.text = "Media compatibilidade";
    }
    else if(this.compatibility > 70) {
      this.text = "Alta compatibilidade";
    }
  }

}
