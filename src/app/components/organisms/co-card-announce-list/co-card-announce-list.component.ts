import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-card-announce-list',
  templateUrl: './co-card-announce-list.component.html',
  styleUrls: ['./co-card-announce-list.component.scss']
})
export class CoCardAnnounceListComponent {

  @Input() firstAnnounce:boolean;

  cards:Array<{
    icon:string,
    description:string,
    buttonTitle:string,
    buttonUrl:string
  }>

  constructor() {
    this.firstAnnounce = true;
    this.cards = [
      {
        icon: 'house',
        description: 'Anuncie seu imóvel e rapidamente nós econtraremos pessoas interessadas para você.',
        buttonTitle: 'Anunciar um imóvel',
        buttonUrl: ''
      },
      {
        icon: 'man-and-girl',
        description: 'Encontre pessoas para morar com você e dividir as despesas. Anuncie agora uma vaga na sua casa.',
        buttonTitle: 'Anunciar uma vaga',
        buttonUrl: '/advertise/vacancy'
      }
    ]
  }

}
