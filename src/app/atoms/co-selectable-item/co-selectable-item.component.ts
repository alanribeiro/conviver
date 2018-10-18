import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-selectable-item',
  templateUrl: './co-selectable-item.component.html',
  styleUrls: ['./co-selectable-item.component.scss']
})
export class CoSelectableItemComponent {
  @Input() size:string;
  @Input() title:string;
  @Input() icon:string;
  @Input() hoverMessage:string;
  @Input() active:boolean;

  constructor() {
    this.active = false;
   }

   selectableToggle(){
     this.active = !this.active;
     console.log("Testando")
     console.log(this.active)
   }
}
