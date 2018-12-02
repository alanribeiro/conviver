import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from 'src/app/services/advertise/advertise.service';

@Component({
  selector: 'advertise-vacancy',
  templateUrl: './advertise-vacancy.component.html',
  styleUrls: ['./advertise-vacancy.component.scss']
})
export class AdvertiseVacancyComponent implements OnInit{

  selectablesItems:any;
  currentSection:number;
  currentSectionValidated:boolean;
  backAvaliable:boolean;
  doneAvaliable:boolean;

  constructor(private advertiseService:AdvertiseService) {
    this.currentSection = 1;
    this.currentSectionValidated = false;
    this.backAvaliable = false;
    this.doneAvaliable = false;
  }

  ngOnInit() {
    this.getRoomsItems();
  }

  setSectionOne(value) {
    this.advertiseService.advertisement.setPropertyType(value.propertyType);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionTwo(value) {
    this.advertiseService.advertisement.setStreet(value.street);
    this.advertiseService.advertisement.setNumber(value.number);
    this.advertiseService.advertisement.setNeighborhood(value.neighborhood);
    this.advertiseService.advertisement.setCity(value.city);
    this.advertiseService.advertisement.setState(value.state);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionThree(value) {
    this.advertiseService.advertisement.setNumberOfPlaces(value.numberOfPlaces);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionFour(value) {
    this.advertiseService.advertisement.setAccommodations(value.rooms);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionFive(value) {
    this.advertiseService.advertisement.setHomeAppliances(value.appliances);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionSix(value) {
    this.advertiseService.advertisement.setAmenities(value.amenities);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionSeven(value) {
    this.advertiseService.advertisement.setRent(value.rent);
    this.advertiseService.advertisement.setExpenses(value.expenses);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionEight(value) {
    this.advertiseService.advertisement.setRestrictions(value.restrictions);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionNine(value) {
    this.advertiseService.advertisement.setRules(value.rules);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionTen(value) {
    this.advertiseService.advertisement.setPhotos(value.photos);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionEleven(value) {
    this.advertiseService.advertisement.setDescription(value.description);
    this.setCurrentSectionValidated(value.validate);
  }

  setCurrentSectionValidated(value:boolean) {
    this.currentSectionValidated = value;
  }

  nextSection() {
    if(this.currentSectionValidated) {
      this.currentSection ++;
      this.backAvaliable = true;
      this.currentSectionValidated = false;
    }

    if(this.currentSection == 11) {
      this.doneAvaliable = true;
    }
  }

  previousSection() {
    this.currentSection --;
    this.currentSectionValidated = true;
    this.doneAvaliable = false;
    if(this.currentSection == 1) {
      this.backAvaliable = false;
    }
  }

  getRoomsItems() {
    this.advertiseService.getRoomItems().subscribe(
      (data:any) => {
        this.selectablesItems = data;
      }
    )
  }

}
