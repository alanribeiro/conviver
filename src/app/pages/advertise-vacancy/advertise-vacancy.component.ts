import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/services/advertisement/advertisement.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

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

  constructor(private advertisementService:AdvertisementService, private message:NzMessageService, private router:Router) {
    this.currentSection = 1;
    this.currentSectionValidated = false;
    this.backAvaliable = false;
    this.doneAvaliable = false;
  }

  ngOnInit() {
    this.getRoomsItems();
  }

  setSectionOne(value) {
    this.advertisementService.advertisement.setPropertyType(value.propertyType);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionTwo(value) {
    this.advertisementService.advertisement.setStreet(value.street);
    this.advertisementService.advertisement.setNumber(value.number);
    this.advertisementService.advertisement.setNeighborhood(value.neighborhood);
    this.advertisementService.advertisement.setCity(value.city);
    this.advertisementService.advertisement.setState(value.state);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionThree(value) {
    this.advertisementService.advertisement.setNumberOfPlaces(value.numberOfPlaces);
    this.advertisementService.advertisement.setNumberOfResidents(value.numberOfResidents);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionFour(value) {
    this.advertisementService.advertisement.setAccommodations(value.rooms);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionFive(value) {
    this.advertisementService.advertisement.setHomeAppliances(value.appliances);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionSix(value) {
    this.advertisementService.advertisement.setAmenities(value.amenities);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionSeven(value) {
    this.advertisementService.advertisement.setRent(value.rent);
    this.advertisementService.advertisement.setExpenses(value.expenses);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionEight(value) {
    this.advertisementService.advertisement.setRestrictions(value.restrictions);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionNine(value) {
    this.advertisementService.advertisement.setRules(value.rules);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionTen(value) {
    let photosUrl = [];
    for(let i in value.photos) {
      photosUrl.push(value.photos[i].thumbUrl);
    }
    this.advertisementService.advertisement.setPhotos(photosUrl);
    this.setCurrentSectionValidated(value.validate);
  }

  setSectionEleven(value) {
    this.advertisementService.advertisement.setDescription(value.description);
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
    this.advertisementService.getRoomItems().subscribe(
      (data:any) => {
        this.selectablesItems = data;
      }
    )
  }

  registerAdvertisement = () => {
    const register = this.advertisementService.registerAdvertisement();
    register.then(() => {
      this.message.success("Anúncio cadastrado com sucesso!");
      this.router.navigateByUrl(`advertisement/${this.advertisementService.advertisement.getId()}`);
    })
    .catch(error => this.message.error("Erro ao cadastrar anúncio"));
  }

}
