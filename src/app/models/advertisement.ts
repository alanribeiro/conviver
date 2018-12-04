export class Advertisement {
  constructor(
    private id:string,
    private description:string,
    private accommodations:Array<string>,
    private homeAppliances:Array<string>,
    private amenities:Array<string>,
    private thumbnail:string,
    private street:string,
    private number:number,
    private neighborhood:string,
    private city:string,
    private state:string,
    private country:string,
    private propertyType:string,
    private numberOfPlaces:number,
    private rate:number,
    private photos:Array<string>,
    private ownerId:string,
    private creationDate:string,
    private rent: {
      value:number,
      waterAndElectricityIncluded:boolean
    },
    private expenses:Array<{
      name:string,
      value:number
    }>,
    private residents:Array<string>,
    private experienceReports:Array<{
      userId:string,
      message:string,
      date:string,
      rate:string
    }>,
    private restrictions:Array<string>,
    private rules:Array<any>
  ) {}

  getId():string {
    return this.id;
  }

  setId(id):void {
    this.id = id;
  }

  getDescription():string {
    return this.description;
  }

  setDescription(description:string):void {
    this.description = description;
  }

  getAccommodations():Array<string> {
    return this.accommodations;
  }

  setAccommodations(accommodations:Array<string>):void {
    this.accommodations = accommodations;
  }

  getHomeAppliances():Array<string> {
    return this.homeAppliances;
  }

  setHomeAppliances(homeAppliances:Array<string>):void {
    this.homeAppliances = homeAppliances;
  }

  getAmenities():Array<string> {
    return this.amenities;
  }

  setAmenities(amenities:Array<string>):void {
    this.amenities = amenities;
  }

  getThumbnail():string {
    return this.thumbnail;
  }

  setThumbnail(thumbnail:string):void {
    this.thumbnail = thumbnail;
  }

  getStreet():string {
    return this.street;
  }

  setStreet(street:string):void {
    this.street = street;
  }

  getNumber():number {
    return this.number;
  }

  setNumber(number:number):void {
    this.number = number;
  }

  getNeighborhood():string {
    return this.neighborhood;
  }

  setNeighborhood(neighborhood:string):void {
    this.neighborhood = neighborhood;
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

  getPhotos():Array<string> {
    return this.photos;
  }

  setPhotos(photos:Array<string>):void {
    this.photos = photos;
  }

  setOwnerId(id:string):void {
    this.ownerId = id;
  }

  getOwnerId():string {
    return this.ownerId;
  }

  getCreationDate():string {
    return this.creationDate;
  }

  setCreationDate(creationDate:string):void {
    this.creationDate = creationDate;
  }

  getRent():Object {
    return this.rent;
  }

  setRent(rent:any):void {
    this.rent = rent;
  }

  getExpenses():Array<any> {
    return this.expenses;
  }

  setExpenses(expenses:Array<any>):void {
    this.expenses = expenses;
  }

  getResidents():Array<string> {
    return this.residents;
  }

  setResidents(residents:Array<string>):void {
    this.residents = residents;
  }

  getExperienceReports():Array<any> {
    return this.experienceReports;
  }

  setExperienceReports(experienceReports:Array<any>):void {
    this.experienceReports = experienceReports;
  }

  getRestrictions():Array<string> {
    return this.restrictions;
  }

  setRestrictions(restrictions:Array<string>):void {
    this.restrictions = restrictions;
  }

  getRules():Array<any> {
    return this.rules;
  }

  setRules(rules:Array<any>):void {
    this.rules = rules;
  }
}