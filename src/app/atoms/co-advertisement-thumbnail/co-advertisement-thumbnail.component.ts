import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-advertisement-thumbnail',
  templateUrl: './co-advertisement-thumbnail.component.html',
  styleUrls: ['./co-advertisement-thumbnail.component.scss']
})

export class CoAdvertisementThumbnailComponent {

  @Input() thumbnail:string;

  constructor() {}

}
