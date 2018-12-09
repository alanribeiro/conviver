import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advertisement } from 'src/app/models/advertisement';
import { AdvertisementService } from 'src/app/services/advertisement/advertisement.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { CompatibilityService } from 'src/app/services/compatibility/compatibility.service';

@Component({
  selector: 'advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  advertisement:Advertisement;
  owner:User;
  residents:Array<any>
  totalPrice:number;
  compatibility:number;
  myAd:boolean;

  constructor(private advertisementService:AdvertisementService, private userService:UserService, private activatedRoute:ActivatedRoute, private compatibilityService:CompatibilityService) {
    this.residents = [];
    this.owner = new User("id", "", "", "", "", 0, "", [], "", "", "", "", "", "", 1, [], []);
    this.totalPrice = 0;
    this.compatibility = 0;
  }

  ngOnInit() {
    this.getAdvertisement();
  }

  getAdvertisement = () => {
    const advertisementId = this.activatedRoute.snapshot.params.id;
    const advertisement = this.advertisementService.getAdvertisement(advertisementId);
    let snapshot = null;
    advertisement.subscribe(
      data => {
        snapshot = data;
        this.advertisement = new Advertisement(
          snapshot.id,
          snapshot.description, 
          snapshot.accommodations, 
          snapshot.homeAppliances,
          snapshot.amenities,
          snapshot.thumbnail,
          snapshot.street,
          snapshot.number,
          snapshot.neighborhood,
          snapshot.city,
          snapshot.state,
          snapshot.country,
          snapshot.propertyType,
          snapshot.numberOfPlaces,
          snapshot.rate,
          snapshot.photos,
          snapshot.ownerId,
          snapshot.creationDate,
          snapshot.rent,
          snapshot.expenses,
          snapshot.residents,
          snapshot.experienceReports,
          snapshot.restrictions,
          snapshot.rules,
          snapshot.numberOfResidents
        )
        this.getOwner(snapshot.ownerId);
        this.populateResidents(snapshot.residents);
        this.calculatePrice(snapshot.rent, snapshot.expenses);
      },
      error => console.log(error)
    )
  }

  populateResidents = (residents) => {
    for(let i in residents) {
      this.getResident(residents[i]);
    }
  }

  getResident(residentId) {
    const userInfo = this.userService.getUserInfo(residentId);
    let snapshot = null;
    userInfo.subscribe(
      data => {
        snapshot = data;
        const obj = {
          id: snapshot.id,
          name: snapshot.firstName,
          photo: snapshot.photo,
          genre: snapshot.genre,
          personality: snapshot.personality,
          age: snapshot.age
        }
        this.residents.push(obj);
      },
      error => console.log(error)
    )
  }

  getOwner = (ownerId) => {
    const userInfo = this.userService.getUserInfo(ownerId);
    let snapshot = null;
    userInfo.subscribe(
      data => {
        snapshot = data;
        this.owner = new User(
          snapshot.id,
          snapshot.firstName, 
          snapshot.lastName, 
          snapshot.email,
          "secretPassword",
          snapshot.age,
          snapshot.genre,
          snapshot.personality,
          snapshot.photo,
          snapshot.description,
          snapshot.city,
          snapshot.state,
          snapshot.country,
          snapshot.since,
          1,
          snapshot.advertisements == undefined ? [] : snapshot.advertisements,
          snapshot.comments == undefined ? [] : snapshot.comments
        )
        this.myAd = this.advertisement.getOwnerId() == this.userService.currentUser.getId() ? true : false;
        const data1 = {
          personality: this.userService.currentUser.getPersonality(),
          age: this.userService.currentUser.getAge()
        }
        const data2 = {
          personality: this.owner.getPersonality(),
          age: this.owner.getAge()
        }
        this.compatibility = Math.round(this.compatibilityService.verifyCompatibility(data1, data2));
      },
      error => console.log(error)
    )
  }

  calculatePrice(rent, expenses) {
    this.totalPrice = Number(rent.value);
    for(let i in expenses) {
      this.totalPrice += Number(expenses[i].value);
    }
  }
}
