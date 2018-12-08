import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'co-advertisement-list',
  templateUrl: './co-advertisement-list.component.html',
  styleUrls: ['./co-advertisement-list.component.scss']
})
export class CoAdvertisementListComponent implements OnChanges {

  @Input() itemsList: Array<any>;

  constructor(private router:Router) { }

  ngOnChanges() {
    console.log(this.itemsList);
  }

  redirectToDetails = (advertisementId) => {
    this.router.navigateByUrl(`advertisement/${advertisementId}`);
  }

}
