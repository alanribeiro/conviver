import { Component } from '@angular/core';

@Component({
  selector: 'my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent {

  myAds:Array<{
    thumbnail:string,
    city:string,
    state:string,
    country:string,
    propertyType:string,
    numberOfPlaces:number,
    rate:number,
    price:number
  }>

  constructor() {}

}
