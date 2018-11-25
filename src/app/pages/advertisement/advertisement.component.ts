import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/models/advertisement';
import { AdvertisementService } from 'src/app/services/advertisement/advertisement.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  advertisement:Advertisement;
  owner:User = new User( // Recuperar usuário do firebase com o advertisement.ownerId
    '',
    'Ronaldinho',
    'Gaúcho',
    '',
    '',
    38,
    'male',
    [],
    'http://classepolitica.com.br/wp-content/uploads/2017/12/Ronaldinho-Ga%C3%BAcho-500x500_c.jpg',
    '',
    'Quixadá',
    'Brasil',
    '',
    1,
    [],
    []
  );

  residents:Array<{ // Essa lista aqui deve ser preenchinda com os dados dos usuários cujo id está em advertisement.residents
    id:string,
    name:string,
    photo:string,
    genre:string
  }>

  constructor(private advertisementService:AdvertisementService) {}

  ngOnInit() {
    this.getAdvertisement();
  }

  getAdvertisement() {
    this.advertisementService.getAdvertisements().subscribe(
      (data:any) => {
        this.advertisement = data.advertisements[0];
      }
    )
  }

}
