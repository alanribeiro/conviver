export class Advertisement {
  constructor(
    private id:string,
    private thumbnail:string,
    private city:string,
    private state:string,
    private country:string,
    private propertyType:string,
    private numberOfPlaces:number,
    private rate:number,
    private price:number
  ) {}

  getId():string {
    return this.id;
  }

  getThumbnail():string {
    return this.thumbnail;
  }

  setThumbnail(thumbnail:string):void {
    this.thumbnail = thumbnail;
  }

  getCity():string {
    return this.city;
  }

  setCity(city:string):void {
    this.city = city;
  }

  getState():string {
    return this.state;
  }

  setState(state:string):void {
    this.state = state;
  }

  getCountry():string {
    return this.country;
  }

  setCountry(country:string):void {
    this.country = country;
  }

  getPropertyType():string {
    return this.propertyType;
  }

  setPropertyType(propertyType:string):void {
    this.propertyType = propertyType;
  }

  getNumberOfPlaces():number {
    return this.numberOfPlaces;
  }

  setNumberOfPlaces(numberOfPlaces:number):void {
    this.numberOfPlaces = numberOfPlaces;
  }

  getRate():number {
    return this.rate;
  }

  setRate(rate:number):void {
    this.rate = rate;
  }

  getPrice():number {
    return this.price;
  }

  setPrice(price:number):void {
    this.price = price;
  }
}