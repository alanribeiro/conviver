import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'co-advertisement-list',
  templateUrl: './co-advertisement-list.component.html',
  styleUrls: ['./co-advertisement-list.component.scss']
})
export class CoAdvertisementListComponent {

  @Input() itemsList: Array<any>;
  @Input() searchTag: Array<any>;

  constructor(private router:Router) { }

  redirectToDetails = (advertisementId) => {
    this.router.navigateByUrl(`advertisement/${advertisementId}`);
  }

}