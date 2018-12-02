import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AdvertiseService } from 'src/app/services/advertise/advertise.service';

@Component({
  selector: 'co-advertise-vacancy-location',
  templateUrl: './co-advertise-vacancy-location.component.html',
  styleUrls: ['./co-advertise-vacancy-location.component.scss']
})
export class CoAdvertiseVacancyLocationComponent implements OnInit {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  states:Array<any>;

  street:string;
  number:number;
  neighborhood:string;
  city:string;
  state:string;

  constructor(private advertiseService:AdvertiseService) { }

  ngOnInit() {
    this.getStates();
  }

  setStreet(value) {
    this.street = value;
    this.validateSection();
  }

  setNumber(value) {
    this.number = value;
    this.validateSection();
  }

  setNeighborhood(value) {
    this.neighborhood = value;
    this.validateSection();
  }
  
  setCity(value) {
    this.city = value;
    this.validateSection();
  }

  setState(value) {
    this.state = value;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      street: this.street,
      number: this.number,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state
    }

    if(this.street == '' || this.street == undefined || this.state == '' || this.state == undefined || this.number == undefined || this.neighborhood == '' || this.neighborhood == undefined || this.city == '' || this.city == undefined || this.state == undefined) {
      this.validate.emit(data);
      return;
    }

    data.validate = true;
    this.validate.emit(data);
  }

  getStates() {
    this.advertiseService.getStates().subscribe(
      (data:any) => {
        this.states = data.states;
      }
    )
  }
}
